import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function CustomButton({ text, action }) {
    return (
        <Pressable onPress={action}>
            <View style={styles.container}>
                <Text>{text}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '20%',
        backgroundColor: '#005A9C',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20
    }
});