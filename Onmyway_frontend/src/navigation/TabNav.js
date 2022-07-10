import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllChatsScreen from '../screens/AllChatsScreen'

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="All Chat" component={AllChatsScreen} />
        </Tab.Navigator>
    );
}