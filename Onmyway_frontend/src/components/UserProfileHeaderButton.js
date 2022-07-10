import { StyleSheet, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import UserHeaderIcon from '../assets/icons/UserHeaderIcon';

export default function UserProfileHeaderButton({ action }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={action}>
                <UserHeaderIcon />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        marginLeft: 20
    }
});