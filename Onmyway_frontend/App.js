import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler'
import UserProvider from "./src/context/UserContext";
import StackController from "./src/navigation/StackController";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <UserProvider>
        <StackController />
      </UserProvider>
    </NavigationContainer>
  );
}

