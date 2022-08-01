import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import EmailIcon from '../../assets/icons/EmailIcon';
import GenderIcon from '../../assets/icons/GenderIcon';
import PasswordIcon from '../../assets/icons/PasswordIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';
import UsernameIcon from '../../assets/icons/UsernameIcon';
import AuthButton from '../../components/AuthButton';
import DatePicker from '../../components/DatePicker';
import Input from '../../components/Input';
import PhoneCustomInput from '../../components/PhoneCustomInput';
import RadioButtonList from '../../components/RadioButtonList';
import { useLoggedIn } from '../../context/LoggedInContext';
import { useUser } from '../../context/UserContext';
import { register } from '../../controllers/authController'
import axios from 'axios'
import storage from '../../storage/asyncStorage';
import { userSchema } from '../../constants/yupValidations';
import DropDown from "react-native-paper-dropdown"

export default function Register({ navigation }) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState(new Date())
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [gender, setGender] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
    ]);
    const [showDropdown, setShowDropdown] = useState(false)
    const { handleUser } = useUser()
    const { handleLoggedIn } = useLoggedIn()

    const handleRegister = async () => {
        try {
            await userSchema.validate({
                username: username,
                email: email,
                dob: date,
                gender: gender,
                phone: phone,
                password: password,
                passwordConfirmation: rePassword,
            })
            const res = await register({ username, email, phone, dob: date, gender, password })
            axios.defaults.headers.common['Authorization'] = `bearer ${ res.token.token }`
            await storage.save({ key: 'token', data: res.token.token })
            handleUser(res.results)
            handleLoggedIn(true)
        }
        catch (e) {
            alert(e.message || 'Something went wrong')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>
            <View style={styles.scrollContainer}>
                <ScrollView>
                    <View style={styles.inputContainer}>
                        <UsernameIcon />
                        <Input placeholder={'Username'} value={username} setValue={setUsername} />
                    </View>
                    <View style={styles.inputContainer}>
                        <EmailIcon />
                        <Input placeholder={'Email'} value={email} setValue={setEmail} />
                    </View>
                    <View style={styles.inputContainer}>
                        <PhoneIcon />
                        <PhoneCustomInput phone={phone} setPhone={setPhone} notThemed={true} />
                    </View>
                    <View style={styles.inputContainer}>
                        <CalendarIcon />
                        <DatePicker date={date} setDate={setDate} notThemed={true} />
                    </View>
                    <View style={styles.inputContainer}>
                        <GenderIcon />
                        <View style={styles.dropdown}>
                            <DropDown
                                label={"Gender"}
                                mode={"flat"}
                                visible={showDropdown}
                                showDropDown={() => setShowDropdown(true)}
                                onDismiss={() => setShowDropdown(false)}
                                value={gender}
                                setValue={setGender}
                                list={items}
                                dropDownItemSelectedTextStyle={{ color: '#005A9C' }}
                                inputProps={{ style: { height: 50, backgroundColor: '#fff', paddingBottom: 5 } }}

                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <PasswordIcon />
                        <Input placeholder={'Password'} value={password} setValue={setPassword} password={true} />
                    </View>
                    <View style={styles.inputContainer}>
                        <PasswordIcon />
                        <Input placeholder={'Reenter Password'} value={rePassword} setValue={setRePassword} password={true} />
                    </View>
                </ScrollView>
            </View>
            <AuthButton value={"Sign up"} action={handleRegister} />
            <View style={[styles.inputContainer, { justifyContent: 'center' }]}>
                <Text style={{ color: '#4AB1EA' }}>Already have an account? </Text>
                <Pressable onPress={() => navigation.navigate('Login')}><Text style={{ color: '#005A9C', textDecorationLine: 'underline' }}>Sign in</Text></Pressable>
            </View>
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
    },
    scrollContainer: {
        height: 300,
        justifyContent: 'flex-end'
    },
    dropdown: {
        width: '83%',
        backgroundColor: '#fff',
        marginBottom: 20
    }
});