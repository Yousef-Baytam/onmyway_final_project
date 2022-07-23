import { AuthStack } from "./AuthStack";
import { useUser } from '../context/UserContext';
import storage from "../storage/asyncStorage";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { me } from "../controllers/authController";
import { DrawerNav } from "./DrawerNav";
import axios from 'axios'
import { url } from "../constants/vars";
import { useLoggedIn } from "../context/LoggedInContext";
import { StatusBar } from 'react-native';
import { set } from "react-native-reanimated";
import { useTheme } from '../context/ThemeContext';

export default function StackController() {
    const { handleUser } = useUser()
    const { loggedIn, handleLoggedIn } = useLoggedIn()
    const { theme, toggleTheme } = useTheme()

    SplashScreen.preventAutoHideAsync()

    const handleToken = async () => {
        try {
            const token = await storage.load({ key: 'token' })
            const storedTheme = await storage.load({ key: 'theme' })
            axios.defaults.headers.common['Authorization'] = `bearer ${ token }`
            storedTheme == 'LIGHT' ? null : toggleTheme()
            const res = await me(token)
            if (res.user.status != 'banned') {
                handleUser(res.user)
                handleLoggedIn(true)
            }
            setTimeout(async () => {
                await SplashScreen.hideAsync()
            }, 500)
        } catch (e) {
            await SplashScreen.hideAsync()
        }
    }

    useEffect(() => {
        handleToken()
        axios.defaults.baseURL = `${ url }`
    }, [])

    return loggedIn ?
        <>
            <DrawerNav />
            <StatusBar
                animated={true}
                backgroundColor={theme.bg}
                barStyle={theme.bg == '#fff' ? 'dark-content' : 'light-content'}
            />
        </>
        :
        <>
            <AuthStack />
            <StatusBar
                animated={true}
                backgroundColor="#fff"
                barStyle={'dark-content'}
            />
        </>
}