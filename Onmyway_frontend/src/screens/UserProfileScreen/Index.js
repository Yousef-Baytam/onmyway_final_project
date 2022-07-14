import { StyleSheet, View, Text, Image } from 'react-native';
import { useUser } from '../../context/UserContext';

export default function UserProfile({ navigation }) {
    const { user } = useUser()

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/blank-profile.webp')} />
            </View>
        </View >
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