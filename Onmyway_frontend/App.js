import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler'
import UserProvider from "./src/context/UserContext";
import AuthenticationProvider from "./src/context/LoggedInContext";
import StackController from "./src/navigation/StackController";

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationProvider>
        <UserProvider>
          <StackController />
        </UserProvider>
      </AuthenticationProvider>
    </NavigationContainer>
  );
}

