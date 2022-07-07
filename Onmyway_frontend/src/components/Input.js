import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import HiddenIcon from '../assets/icons/HiddenIcon';

export default function Input({ placeholder, value, setValue, keyboard, secureTextEntry, password }) {
    const [secure, setSecure] = useState(password ? true : false)
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder={placeholder}
                style={[styles.input, password && { width: '76%' }]}
                value={value}
                onChangeText={setValue}
                keyboardType={keyboard}
                secureTextEntry={secure} />
            {password && <Pressable onPress><HiddenIcon /></Pressable>}
        </View >
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '85%',
        alignItems: 'flex-start',
        flexDirection: "row"
    },
    input: {
        width: '85%',
        borderBottomWidth: 0.2,
        borderColor: 'rgba(0,0,0, 0.7)',
        paddingBottom: 10,
        marginBottom: 25,
        paddingLeft: 10
    }
});

Input.defaultProps = {
    keyboard: 'default',
}