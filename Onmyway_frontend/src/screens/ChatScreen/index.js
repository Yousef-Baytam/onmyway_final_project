import { useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';

export default function Chat({ navigation }) {
    const route = useRoute()
    const chatRoom = route.params
    console.log(chatRoom)

    return (
        <View style={styles.container}>
            <Text>Chat YAAAYY!!!</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});