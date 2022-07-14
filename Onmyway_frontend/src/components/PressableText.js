import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function PressableText({ text, action }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={action}>
                <Text>{text}</Text>
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