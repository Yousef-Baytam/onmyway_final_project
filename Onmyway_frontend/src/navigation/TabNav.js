import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerToggler from '../components/DrawerToggler';
import UserProfileHeaderButton from '../components/UserProfileHeaderButton';
import AllChatsScreen from '../screens/AllChatsScreen'
import { MainStack } from './MainStack';
import { DrawerActions } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
            <Tab.Screen name="All Chat" component={AllChatsScreen} options={({ navigation }) => ({
                headerTitle: '',
                headerLeft: () => (
                    <UserProfileHeaderButton action={() => { navigation.navigate('UserProfile') }} />),
                headerRight: () => (
                    <DrawerToggler action={() => navigation.dispatch(DrawerActions.openDrawer())} />),
            })
            } />
        </Tab.Navigator>
    );
}