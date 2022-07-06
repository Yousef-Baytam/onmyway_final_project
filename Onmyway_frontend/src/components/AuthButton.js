import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function AuthButton({ value }) {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Pressable android_ripple={{ color: '#000' }} onPress={() => { }}>
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
        paddingVertical: 20,
        paddingHorizontal: '40%',
        alignItems: 'center',
        borderRadius: 10
    },
    text: {
        color: '#fff',
        fontSize: 25
    }
});