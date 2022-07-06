import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function AuthButton({ value }) {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Pressable android_ripple={{ color: '#005A9C', borderless: true }} onPress={() => { }}>
                    <Text style={styles.text}>{value}</Text>
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
        backgroundColor: '#A1CCE4',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        paddingVertical: 20,
        paddingHorizontal: '40%',
        color: '#fff',
        fontSize: 25
    }
});