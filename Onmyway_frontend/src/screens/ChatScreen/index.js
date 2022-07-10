import { StyleSheet, View, Text } from 'react-native';

export default function Chat({ navigation }) {

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