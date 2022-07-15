import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function CustomButton({ text, action, custom }) {
    return (
        <View style={[styles.container, custom]}>
            <View style={styles.textContainer}>
                <Pressable onPress={action} android_ripple={{ color: '#002C4D', borderless: true }}>
                    <Text style={styles.text}>{text}</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        borderRadius: 10,
        backgroundColor: '#005A9C',
    },
    text: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        fontSize: 10,
        color: '#fff',
    }
});

CustomButton.defaultProps = {
    custom: {}
}