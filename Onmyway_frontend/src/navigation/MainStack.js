import { createStackNavigator } from '@react-navigation/stack';
import Browse from '../screens/BrowseScreen'

export function AuthStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Browse" component={Browse} />
        </Stack.Navigator>
    );
}