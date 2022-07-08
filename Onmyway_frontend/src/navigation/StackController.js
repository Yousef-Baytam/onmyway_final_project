import { AuthStack } from "./AuthStack";
import { useUser } from '../context/UserContext';

export default function StackController() {
    const { user } = useUser()
    return user ? <MainStack /> : <AuthStack />
}