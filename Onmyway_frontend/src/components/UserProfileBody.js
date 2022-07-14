import { StyleSheet, View, Text } from 'react-native';

export default function UserProfileBody({ user }) {
    return (
        <View style={styles.container}>
            {/* <UserName/> */}
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#EAEAEA',
        borderRadius: 10
    },
});