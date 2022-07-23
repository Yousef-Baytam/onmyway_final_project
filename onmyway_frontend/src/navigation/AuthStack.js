import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';

export function AuthStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}