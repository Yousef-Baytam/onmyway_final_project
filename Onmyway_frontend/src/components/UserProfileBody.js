import { StyleSheet, View, Text } from 'react-native';
import BodyElement from './BodyElement';

export default function UserProfileBody({ user }) {
    return (
        <View style={styles.container}>
            <BodyElement keyWord={'Username'} value={user.username} />
            {/* <UserEmail/> */}
            {/* <UserPhone/> */}
            {/* <UserGender/> */}
            {/* <UserDob/> */}
            {/* <UserCar/> */}
            {/* <MusicPrefrence/> */}
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