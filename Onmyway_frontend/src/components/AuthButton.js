import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function AuthButton({ value, action }) {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Pressable android_ripple={{ color: '#A1CCE4', borderless: true }} onPress={() => { action() }}>
                    <Text style={styles.text} numberOfLines={1}>{value}</Text>
                </Pressable>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 25,
    },
    button: {
        backgroundColor: '#005A9C',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: '40%',
        color: '#fff',
        fontSize: 25,
    }
});