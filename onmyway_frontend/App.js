import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler'
import UserProvider from "./src/context/UserContext";
import ThemeProvider from './src/context/ThemeContext'
import AuthenticationProvider from "./src/context/LoggedInContext";
import StackController from "./src/navigation/StackController";
import { Provider as PaperProvider } from 'react-native-paper'

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthenticationProvider>
          <PaperProvider>
            <UserProvider>
              <StackController />
            </UserProvider>
          </PaperProvider>
        </AuthenticationProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

