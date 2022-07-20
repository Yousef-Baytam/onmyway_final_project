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

const Tab = createBottomTabNavigator();

export default function TabNav() {
    const [newMessages, setNewMessages] = useState(null)
    const { user } = useUser()

    // useEffect(() => {
    //     const q = query(collection(db, "chatRooms"), where('userLocalDbIds', 'array-contains', user._id), orderBy('latestMessage.createdAt', "desc"))
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         const chatRooms = []
    //         querySnapshot.forEach((doc) => {
    //             chatRooms.push({ ...doc.data(), id: doc.id })
    //         })

    //         let msgs = chatRooms.map((e) => {
    //             return {
    //                 userTag: e.users1.userId == user._id ? 'users2' : 'users1',
    //                 readStatus: e.readStatus,
    //                 sender: e.sender,
    //                 numberOfMessages: e.numberOfMessages
    //             }
    //         })
    //         console.log(msgs)

    //         // setThreadsUsers(chatRooms.map((e) => {
    //         //     return {
    //         //         id: e.id,
    //         //         user: e.users1.userId == user._id ? e.users2 : e.users1,
    //         //         lastMessage: e.latestMessage,
    //         //         userTag: e.users1.userId == user._id ? 'users2' : 'users1',
    //         //         readStatus: e.readStatus,
    //         //         sender: e.sender,
    //         //         numberOfMessages: e.numberOfMessages
    //         //     }
    //         // }))

    //     })
    //     return () => unsubscribe()
    // }, [])

    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false, tabBarStyle: {
                borderTopWidth: 0,
                height: 60,
                elevation: 0
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
                tabBarBadge: 3,
                tabBarBadgeStyle: { backgroundColor: '#005A9C' }
            }} listeners={{
                tabPress: (e) => {
                    e.preventDefault();
                },
            }}
            />

            <Tab.Screen name="All Chat" component={AllChatsScreen} options={({ navigation }) => ({
                headerTitle: 'Messages', headerTitleAlign: 'center', headerStyle: { elevation: 0 },
                headerLeft: () => (
                    <BackArrow action={() => { navigation.dispatch(CommonActions.goBack()) }} />),
                headerRight: () => (
                    <DrawerToggler action={() => navigation.dispatch(DrawerActions.openDrawer())} />), tabBarItemStyle: {
                        marginLeft: 200,
                    }, tabBarIcon: ({ focused }) => (<MessagesIcon color={focused ? '#005A9C' : '#A1CCE4'} />),
                tabBarBadge: 3,
                tabBarBadgeStyle: { backgroundColor: '#005A9C' }
            })
            } />

        </Tab.Navigator>
    );
}