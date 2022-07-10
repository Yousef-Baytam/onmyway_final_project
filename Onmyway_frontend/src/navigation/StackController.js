import { AuthStack } from "./AuthStack";
import { useUser } from '../context/UserContext';
import { MainStack } from "./MainStack";
import storage from "../storage/asyncStorage";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { me } from "../controllers/authController";

export default function StackController() {
    const { user, handleUser } = useUser()

    SplashScreen.preventAutoHideAsync()

    const handleToken = async () => {
        try {
            const token = await storage.load({ key: 'token' })
            const res = await me(token)
            if (res.user.status != 'banned')
                handleUser(res.user)
            await SplashScreen.hideAsync()
        } catch (e) {
            await SplashScreen.hideAsync()
        }
    }

    useEffect(() => {
        handleToken()
        storage.remove({ key: 'token' })
    }, [])

    return user ? <MainStack /> : <AuthStack />
}