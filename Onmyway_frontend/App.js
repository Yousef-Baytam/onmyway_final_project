import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler'
import UserProvider from "./src/context/UserContext";
import StackController from "./src/navigation/StackController";

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider>
        <StackController />
      </UserProvider>
    </NavigationContainer>
  );
}

