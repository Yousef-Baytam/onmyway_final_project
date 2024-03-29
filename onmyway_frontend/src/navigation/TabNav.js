import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerToggler from '../components/DrawerToggler';
import AllChatsScreen from '../screens/AllChatsScreen'
import { MainStack } from './MainStack';
import { CommonActions, DrawerActions } from '@react-navigation/native';
import MessagesIcon from '../assets/icons/MessagesIcon';
import Browse from '../screens/BrowseScreen';
import NotificationsBellIcon from '../assets/icons/NotificationsBellIcon';
import BackArrow from '../components/BackArrow';
import { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { db } from '../../firebase'
import { useUser } from '../context/UserContext';
import { View, StyleSheet, LayoutAnimation, FlatList, Text } from 'react-native';
import { getUserPost } from '../controllers/postsController';
import NotificationList from '../components/NotificationList';
import { useTheme } from '../context/ThemeContext';
import CustomButton from '../components/CustomButton';

const Tab = createBottomTabNavigator();

export default function TabNav() {
    const [showNotifications, setShowNotifications] = useState(false)
    const [newMessages, setNewMessages] = useState(null)
    const [userPosts, setUserPosts] = useState([])
    const [refreshData, setRefreshData] = useState(false)
    const { user } = useUser()
    const { theme } = useTheme()

    useEffect(() => {
        const q = query(collection(db, "chatRooms"), where('userLocalDbIds', 'array-contains', user._id))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const chatRooms = []
            querySnapshot.forEach((doc) => {
                chatRooms.push({ ...doc.data(), id: doc.id })
            })
            let msgs = 0
            if (chatRooms.length > 0) {
                msgs = chatRooms.map((e) => {
                    if (e.sender != (e.users1.userId == user._id ? 'users2' : 'users1') && !e.readStatus)
                        return e.numberOfMessages
                    return 0

                })
            }
            if (msgs) {
                let total = msgs.reduce((a, b) => a + b, 0)
                setNewMessages(total != 0 ? total : null)
            }
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        const getPosts = async () => {
            const posts = await getUserPost()
            let final = []
            if (posts.results.length > 0) {
                let res = (posts.results.filter((e) => (e.joinRequests.length > 0 && (e.repeat || new Date(e.date) >= new Date()))).map((i) => ({ id: i._id, pendingRequests: i.joinRequests.filter((j) => (j.status == 'pending')) })))

                for (let i of res) {
                    if (i.pendingRequests.length > 1)
                        for (let j of i.pendingRequests)
                            final.push({ id: i.id, data: j })
                    else if (i.pendingRequests.length == 1)
                        final.push({ id: i.id, data: i.pendingRequests[0] })
                }
                setUserPosts(final)
            }
        }
        getPosts()
    }, [refreshData])

    return (
        <>
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false, tabBarStyle: {
                    borderTopWidth: 0,
                    height: 60,
                    elevation: 0,
                    backgroundColor: theme.bg
                },
            }}>

                <Tab.Screen name="Main" component={MainStack} options={{
                    headerShown: false, tabBarItemStyle: {
                        position: 'absolute'
                    }
                }} />

                <Tab.Screen name="Notifications" component={Browse} options={{
                    headerShown: false,
                    tabBarItemStyle: {
                    },
                    tabBarIcon: ({ focused }) => (<NotificationsBellIcon color={focused ? '#005A9C' : '#A1CCE4'} />),
                    tabBarBadge: userPosts?.length || null,
                    tabBarBadgeStyle: { backgroundColor: '#005A9C' }
                }} listeners={{
                    tabPress: (e) => {
                        e.preventDefault()
                        LayoutAnimation.configureNext(
                            LayoutAnimation.create(150, 'easeInEaseOut', 'opacity')
                        )
                        setShowNotifications(!showNotifications)
                    },
                }}
                />

                <Tab.Screen name="All Chat" component={AllChatsScreen} options={({ navigation }) => ({
                    headerTintColor: theme.text,
                    headerTitle: 'All Chats', headerTitleAlign: 'center', headerStyle: { elevation: 0, backgroundColor: theme.bg },
                    headerLeft: () => (
                        <BackArrow action={() => { navigation.dispatch(CommonActions.goBack()) }} />),
                    headerRight: () => (
                        <DrawerToggler action={() => navigation.dispatch(DrawerActions.openDrawer())} />), tabBarItemStyle: {
                            marginLeft: 200,
                        }, tabBarIcon: ({ focused }) => (<MessagesIcon color={focused ? '#005A9C' : '#A1CCE4'} />),
                    tabBarBadge: newMessages,
                    tabBarBadgeStyle: { backgroundColor: '#005A9C' }
                })
                } />

            </Tab.Navigator>
            <View style={[styles.notificationsContainer, { maxHeight: showNotifications ? '80%' : 0, backgroundColor: theme.light }]}>
                {
                    userPosts?.length != 0 ?
                        <FlatList
                            data={userPosts}
                            renderItem={({ item }) => (<NotificationList data={item} action={setRefreshData} />)}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => item.id}
                            style={{ width: '100%' }}
                        />
                        :
                        <View style={styles.noNotContainer}>
                            <Text style={{ color: theme.text, marginBottom: 20 }}>No New Notifications!</Text>
                            <CustomButton text={'Refresh'} action={() => setRefreshData(!refreshData)} />
                        </View>
                }

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    notificationsContainer: {
        width: '80%',
        height: '40%',
        position: 'absolute',
        backgroundColor: '#EAEAEA',
        bottom: 65,
        left: 20,
        borderRadius: 10
    },
    noNotContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})