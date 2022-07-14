import { StyleSheet, View, Text } from 'react-native';

export default function UserName({ text }) {

    return (
        <View style={styles.container}>
            <View style={styles.key}>
                <Text>Username</Text>
            </View>
            <View style={styles.value}>
                <Text>{text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    key: {
        width: '35%',
        paddingLeft: 10
    },
    value: {
        width: '65%',
        paddingLeft: 10
    }
});

