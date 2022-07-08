import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler'
import UserProvider from "./src/context/UserContext";
import LaodingProvider from "./src/context/LoadingContext";
import StackController from "./src/navigation/StackController";

export default function App() {
  return (
    <NavigationContainer>
      <LaodingProvider>
        <UserProvider>
          <StackController />
        </UserProvider>
      </LaodingProvider>
    </NavigationContainer>
  );
}

