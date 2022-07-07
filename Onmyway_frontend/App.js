import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/LoginScreen';
import Register from './src/screens/RegisterScreen';
import 'react-native-gesture-handler'
import UserProvider from "./src/constants/UserContext";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

