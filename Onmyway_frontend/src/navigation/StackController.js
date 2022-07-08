import { AuthStack } from "./AuthStack";
import { useUser } from '../context/UserContext';
import { MainStack } from "./MainStack";

export default function StackController() {
    const { user } = useUser()
    return user ? <MainStack /> : <AuthStack />
}