import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PasswordIcon from '../../assets/icons/PasswordIcon';
import UsernameIcon from '../../assets/icons/UsernameIcon';
import AuthButton from '../../components/AuthButton';
import Input from '../../components/Input';

export default function Register() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <AuthButton value={"Sign up"} />
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