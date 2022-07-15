import { StyleSheet, View, Text, ScrollView } from 'react-native';
import BodyElement from './BodyElement';
import moment from 'moment'
import EditPenIcon from '../assets/icons/EditPenIcon'

export default function UserProfileBody({ user }) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BodyElement keyWord={'Username'} value={user.username} />
                <BodyElement keyWord={'Email'} value={user.email} />
                <BodyElement keyWord={'Phone'} value={user.phone} />
                <BodyElement keyWord={'Gender'} value={`${ user.gender[0].toUpperCase() }${ user.gender.slice(1) }`} />
                <BodyElement keyWord={'DOB'} value={moment(user.dob).format('MMMM Do YYYY')} />
                <BodyElement keyWord={'Car'} value={user.car || 'None'} />
                <BodyElement keyWord={'Music Taste'} value={user.musicPrefrences || 'Any'} />
            </ScrollView>
            <View style={{ position: 'absolute', right: 10, top: 10 }}>
                <EditPenIcon />
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
});