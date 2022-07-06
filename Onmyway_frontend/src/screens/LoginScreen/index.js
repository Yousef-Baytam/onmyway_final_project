import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Input from '../../components/Input';

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/LoginPageImage.jpg')} />
            <Input placeholder={'Username'} value={username} setValue={setUsername} keyboard={'default'} />
            <Input placeholder={'Password'} value={password} setValue={setPassword} keyboard={'default'} />
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
});