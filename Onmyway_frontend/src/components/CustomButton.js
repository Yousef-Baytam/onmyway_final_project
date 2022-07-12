import { StyleSheet, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function CustomButton({ action }) {
    return (
        <Pressable onPress={action}>
            <View style={styles.container}>
            </View>
        </Pressable>
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