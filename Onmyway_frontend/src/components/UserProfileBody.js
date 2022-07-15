import { StyleSheet, View, Text, ScrollView } from 'react-native';
import BodyElement from './BodyElement';
import moment from 'moment'
import EditPenIcon from '../assets/icons/EditPenIcon'
import { useState } from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CancelIcon from '../assets/icons/CancelIcon';
import TickIcon from '../assets/icons/TickIcon';

export default function UserProfileBody({ user }) {
    const [editMode, setEditMode] = useState(false)
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BodyElement keyWord={'Username'} value={user.username} editMode={editMode} />
                <BodyElement keyWord={'Email'} value={user.email} editMode={editMode} />
                <BodyElement keyWord={'Phone'} value={user.phone} editMode={editMode} />
                <BodyElement keyWord={'Gender'} value={`${ user.gender[0].toUpperCase() }${ user.gender.slice(1) }`} editMode={editMode} />
                <BodyElement keyWord={'DOB'} value={moment(user.dob).format('MMMM Do YYYY')} editMode={editMode} />
                <BodyElement keyWord={'Car'} value={user.car || 'None'} editMode={editMode} />
                <BodyElement keyWord={'Music Taste'} value={user.musicPrefrences || 'Any'} editMode={editMode} />
            </ScrollView>
            <View style={{ position: 'absolute', right: 10, top: 10 }}>
                {
                    editMode ?
                        <View style={styles.editButtonsConatainer}>
                            <Pressable onPress={() => setEditMode(false)} style={{ marginLeft: 10 }}>
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