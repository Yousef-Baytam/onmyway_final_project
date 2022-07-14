import { StyleSheet, View, Text } from 'react-native';
import BodyElement from './BodyElement';
import moment from 'moment'

export default function UserProfileBody({ user }) {
    return (
        <View style={styles.container}>
            <BodyElement keyWord={'Username'} value={user.username} />
            <BodyElement keyWord={'Email'} value={user.email} />
            <BodyElement keyWord={'Phone'} value={user.phone} />
            <BodyElement keyWord={'Gender'} value={`${ user.gender[0].toUpperCase() }${ user.gender.slice(1) }`} />
            <BodyElement keyWord={'DOB'} value={moment(user.dob).format('MMMM Do YYYY')} />
            <BodyElement keyWord={'Car'} value={user.car || 'None'} />
            <BodyElement keyWord={'Music Taste'} value={user.musicPrefrences.length != 0 ? user.musicPrefrences : 'Any'} />
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
        paddingTop: 20,
        borderRadius: 10
    },
});