import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Input({ text, color }) {

    return (
        <View style={styles.inputContainer}>
            <View></View>
            <Text></Text>
        </View >
    );
}

const styles = StyleSheet.create({
    inputContainer: {

    },
    input: {

    }
});

Input.defaultProps = {
    keyboard: 'default',
}