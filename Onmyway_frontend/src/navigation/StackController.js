import { AuthStack } from "./AuthStack";
import { useUser } from '../context/UserContext';
import { MainStack } from "./MainStack";
import storage from "../storage/asyncStorage";
import { useEffect } from "react";

export default function StackController() {
    const { user } = useUser()

    const handleToken = async () => {
        try {
            const token = await storage.load({ key: 'token' })
            const res = await me(token)
            handleUser(res.user)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        handleToken()
    }, [])

    return user ? <MainStack /> : <AuthStack />
}