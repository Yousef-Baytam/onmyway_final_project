import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import UsernameIcon from '../../assets/icons/UsernameIcon';
import AuthButton from '../../components/AuthButton';
import Input from '../../components/Input';

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/LoginPageImage.jpg')} style={styles.image} />
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                <UsernameIcon />
                <Input placeholder={'Username'} value={username} setValue={setUsername} keyboard={'default'} />
            </View>
            <Input placeholder={'Password'} value={password} setValue={setPassword} keyboard={'default'} />
            <AuthButton value={"Login"} />
        </View>
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
        width: '80%'
    }
});