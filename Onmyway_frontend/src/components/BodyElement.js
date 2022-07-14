import { StyleSheet, View, Text } from 'react-native';

export default function BodyElement({ keyWord, value }) {

    return (
        <View style={styles.container}>
            <View style={styles.keyStyle}>
                <Text>{keyWord}</Text>
            </View>
            <View style={styles.valueStyle}>
                <Text>{value}</Text>
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
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    keyStyle: {
        width: '35%',
        paddingLeft: 10
    },
    valueStyle: {
        width: '65%',
        paddingLeft: 10
    }
});

