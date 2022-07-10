import { AuthStack } from "./AuthStack";
import { useUser } from '../context/UserContext';
import storage from "../storage/asyncStorage";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { me } from "../controllers/authController";
import { DrawerNav } from "./DrawerNav";

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
    }, [])

    return user ? <DrawerNav /> : <AuthStack />
}