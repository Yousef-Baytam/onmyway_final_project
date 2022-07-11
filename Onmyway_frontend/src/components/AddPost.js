import { StyleSheet, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import AddPostIcon from '../assets/icons/AddPostIcon';

export default function BackArrow({ action }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={action}>
                <AddPostIcon />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 45,
        alignItems: 'center',
        marginLeft: 20
    }
});