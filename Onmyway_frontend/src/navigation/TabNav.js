import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerToggler from '../components/DrawerToggler';
import UserProfileHeaderButton from '../components/UserProfileHeaderButton';
import AllChatsScreen from '../screens/AllChatsScreen'
import { MainStack } from './MainStack';
import { DrawerActions } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false, tabBarStyle: {
                backgroundColor: '#fff',
                borderTopWidth: 0,
                height: 60,
            },
        }}>
            <Tab.Screen name="Main" component={MainStack} options={{
                headerShown: false, tabBarItemStyle: {
                    position: 'absolute'
                }
            }} />
            <Tab.Screen name="All Chat" component={AllChatsScreen} options={({ navigation }) => ({
                headerTitle: '',
                headerLeft: () => (
                    <UserProfileHeaderButton action={() => { navigation.navigate('UserProfile') }} />),
                headerRight: () => (
                    <DrawerToggler action={() => navigation.dispatch(DrawerActions.openDrawer())} />), tabBarItemStyle: {
                        backgroundColor: '#fff',
                        marginLeft: 300,
                    },//  tabBarIcon: ({focused}) => ()
            })
            } />
        </Tab.Navigator>
    );
}