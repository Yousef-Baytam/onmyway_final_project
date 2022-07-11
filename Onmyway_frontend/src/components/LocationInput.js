import { StyleSheet, Text, View } from 'react-native';

export default function LocationInput({ text, color }) {

    return (
        <View style={styles.inputContainer}>
            <View style={styles.indicator}></View>
            <Text style={styles.textContainer}>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    indicator: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 10,
        backgroundColor: '#000'
    },
    textContainer: {
        width: '100%',
        padding: 5,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: '#EAEAEA',
        color: 'rgba(0,0,0,0.2)'
    }
});