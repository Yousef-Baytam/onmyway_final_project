import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import PasswordIcon from '../../assets/icons/PasswordIcon';
import UsernameIcon from '../../assets/icons/UsernameIcon';
import AuthButton from '../../components/AuthButton';
import Input from '../../components/Input';
import { useUser } from '../../context/UserContext';
import { login, me } from '../../controllers/authController'
import storage from '../../storage/asyncStorage'

export default function Login({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { handleUser } = useUser()

    const handleLogin = async () => {
        try {
            const res = await login({ username, password })
            handleUser(res.user)
            console.log(res.token.token)
            await storage.save({ key: 'token', data: res.token.token })
        }
        catch (e) {
            console.log(e)
        }
    }

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

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/LoginPageImage.jpg')} style={styles.image} />
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                <UsernameIcon />
                <Input placeholder={'Username'} value={username} setValue={setUsername} />
            </View>
            <View style={styles.inputContainer}>
                <PasswordIcon />
                <Input placeholder={'Password'} value={password} setValue={setPassword} password={true} />
            </View>
            <AuthButton value={"Login"} action={handleLogin} />
            <View style={[styles.inputContainer, { justifyContent: 'center' }]}>
                <Text style={{ color: '#A1CCE4' }}>New to Onmyway? </Text>
                <Pressable onPress={() => navigation.navigate('Register')}><Text style={{ color: '#005A9C', textDecorationLine: 'underline' }}>Sign up</Text></Pressable>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '33%'
    },
    title: {
        alignSelf: 'flex-start',
        fontSize: 50,
        marginLeft: '10%',
        marginBottom: '5%',
        marginTop: '5%'
    },
    inputContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-around'
    }
});