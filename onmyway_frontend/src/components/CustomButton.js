import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function CustomButton({ text, action, custom, customButton, customText }) {
    return (
        <View style={[styles.container, custom]}>
            <View style={[styles.textContainer, customButton]}>
                <Pressable onPress={action} android_ripple={{ color: '#002C4D', borderless: true }}>
                    <Text style={[styles.text, customText]} numberOfLines={1}>{text}</Text>
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
        fontSize: 11,
        color: '#fff',
    }
});

CustomButton.defaultProps = {
    custom: {},
    customButton: {},
    customText: {},
}