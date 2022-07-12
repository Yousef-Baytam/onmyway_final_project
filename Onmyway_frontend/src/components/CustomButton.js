import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function CustomButton({ text, action }) {
    return (
        <Pressable onPress={action}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        fontSize: 10,
        color: '#fff',
        borderRadius: 10,
        backgroundColor: '#005A9C',
    }
});