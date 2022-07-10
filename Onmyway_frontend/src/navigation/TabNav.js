import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerToggler from '../components/DrawerToggler';
import UserProfileHeaderButton from '../components/UserProfileHeaderButton';
import AllChatsScreen from '../screens/AllChatsScreen'
import { MainStack } from './MainStack';
import { CommonActions, DrawerActions } from '@react-navigation/native';
import MessagesIcon from '../assets/icons/MessagesIcon';
import Browse from '../screens/BrowseScreen';
import NotificationsBellIcon from '../assets/icons/NotificationsBellIcon';

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false, tabBarStyle: {
                borderTopWidth: 0,
                height: 60,
            },
        }}>

            <Tab.Screen name="Main" component={MainStack} options={{
                headerShown: false, tabBarItemStyle: {
                    position: 'absolute'
                }
            }} />

            <Tab.Screen name="Notifications" component={Browse} options={{
                headerShown: false,
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
                headerTitle: 'Messages', headerTitleAlign: 'center',
                headerLeft: () => (
                    <UserProfileHeaderButton action={() => { navigation.dispatch(CommonActions.goBack()) }} />),
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