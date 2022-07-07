import { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EmailIcon from '../../assets/icons/EmailIcon';
import PasswordIcon from '../../assets/icons/PasswordIcon';
import UsernameIcon from '../../assets/icons/UsernameIcon';
import AuthButton from '../../components/AuthButton';
import Input from '../../components/Input';
import PhoneInput from 'react-native-phone-input'

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')

    const phoneInput = useRef()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <View style={styles.inputContainer}>
                <UsernameIcon />
                <Input placeholder={'Username'} value={username} setValue={setUsername} />
            </View>
            <View style={styles.inputContainer}>
                <EmailIcon />
                <Input placeholder={'Email'} value={email} setValue={setEmail} />
            </View>
            <View style={styles.inputContainer}>
                <EmailIcon />
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={phone}
                    defaultCode="IN"
                    onChangeFormattedText={(e) => {
                        setPhone(e);
                    }}
                />
            </View>
            <View style={styles.inputContainer}>
                <PasswordIcon />
                <Input placeholder={'Password'} value={password} setValue={setPassword} password={true} />
            </View>
            <View style={styles.inputContainer}>
                <PasswordIcon />
                <Input placeholder={'Reenter Password'} value={rePassword} setValue={setRePassword} password={true} />
            </View>
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