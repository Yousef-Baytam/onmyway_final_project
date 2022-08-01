import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useTheme } from '../context/ThemeContext';

export default function PressableText({ text, action, custom, black, customText, textContainerStyle }) {
    const { theme } = useTheme()
    return (
        <View style={[styles.container, custom]}>
            <Pressable onPress={action} style={textContainerStyle}>
                <Text style={[{ color: black ? '#000' : theme.text }, customText]}>{text}</Text>
            </Pressable>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

PressableText.defaultProps = {
    custom: {},
    black: false,
    customText: {},
    textContainerStyle: {}
}