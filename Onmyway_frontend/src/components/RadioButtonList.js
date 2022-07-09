import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';


export default function RadioButtonList({ }) {
    const [checked, setChecked] = useState('first');

    return (
        <View style={styles.inputContainer}>
            <View style={styles.input}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '85%',
        alignItems: 'flex-start',
        flexDirection: "row",
        justifyContent: 'center'
    },
    input: {
        width: '95%',
        borderBottomWidth: 0.2,
        borderColor: 'rgba(0,0,0, 0.7)',
        paddingBottom: 10,
        marginBottom: 25,
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: 'center'
    }
});