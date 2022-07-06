import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function AuthButton({ value }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable>
                <View style={styles.button}>
                    <Text>{value}</Text>
                </View>
            </Pressable>
        </View>
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
    }
});