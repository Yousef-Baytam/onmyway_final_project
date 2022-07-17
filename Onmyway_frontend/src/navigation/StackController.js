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

export default function StackController() {
    const { handleUser } = useUser()
    const { loggedIn, handleLoggedIn } = useLoggedIn()

    SplashScreen.preventAutoHideAsync()

    const handleToken = async () => {
        try {
            const token = await storage.load({ key: 'token' })
            axios.defaults.headers.common['Authorization'] = `bearer ${ token }`
            const res = await me(token)
            if (res.user.status != 'banned') {
                handleUser(res.user)
                handleLoggedIn(true)
            }
            await SplashScreen.hideAsync()
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
                backgroundColor="#fff"
                barStyle={'dark-content'}
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