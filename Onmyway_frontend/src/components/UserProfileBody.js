import { StyleSheet, View, Text, ScrollView } from 'react-native';
import BodyElement from './BodyElement';
import moment from 'moment'
import EditPenIcon from '../assets/icons/EditPenIcon'
import { useState } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CancelIcon from '../assets/icons/CancelIcon';
import TickIcon from '../assets/icons/TickIcon';
import { updateUserInfo } from '../controllers/userController';

export default function UserProfileBody({ user }) {
    const [editMode, setEditMode] = useState(false)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [gender, setGender] = useState(user.gender)
    const [date, setDate] = useState(new Date(user.dob))
    const [car, setCar] = useState(user.car)
    const [musicPrefrences, setMusicPrefrences] = useState(user.musicPrefrences)

    const handleUpdateUserInfo = async () => {
        try {
            const res = await updateUserInfo({ username, email, phone, gender, date, carDetails: car, musicPrefrences })
            setEditMode(false)
            console.log(res)
        } catch (e) {
            console.log(e)
            alert('something went wrong!')
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BodyElement keyWord={'Username'} value={user.username} editMode={editMode} editType={'input'} setValue={setUsername} editDisplay={username} />
                <BodyElement keyWord={'Email'} value={user.email} editMode={editMode} editType={'input'} setValue={setEmail} editDisplay={email} />
                <BodyElement keyWord={'Phone'} value={user.phone} editMode={editMode} editType={'phone'} setValue={setPhone} editDisplay={phone} />
                <BodyElement keyWord={'Gender'} value={`${ user.gender[0].toUpperCase() }${ user.gender.slice(1) }`} setValue={setGender} editMode={editMode} editType={'gender'} editDisplay={gender} />
                <BodyElement keyWord={'DOB'} value={moment(user.dob).format('MMMM Do YYYY')} editMode={editMode} setValue={setDate} editType={'date'} editDisplay={date} />
                <BodyElement keyWord={'Car'} value={user.car || 'None'} editMode={editMode} editType={'input'} setValue={setCar} editDisplay={car} />
                <BodyElement keyWord={'Music Taste'} value={user.musicPrefrences || 'Any'} editMode={editMode} setValue={setMusicPrefrences} editType={'input'} editDisplay={musicPrefrences} />
            </ScrollView>
            <View style={{ position: 'absolute', right: 10, top: 10 }}>
                {
                    editMode ?
                        <View style={styles.editButtonsConatainer}>
                            <Pressable onPress={handleUpdateUserInfo} style={{ marginLeft: 10 }}>
                                <TickIcon />
                            </Pressable>
                            <Pressable onPress={() => setEditMode(false)}>
                                <CancelIcon />
                            </Pressable>
                        </View> :
                        <Pressable onPress={() => setEditMode(true)}>
                            <EditPenIcon />
                        </Pressable>
                }
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#EAEAEA',
        paddingVertical: 10,
        borderRadius: 10
    },
    editButtonsConatainer: {
        flexDirection: 'row-reverse'
    }
});