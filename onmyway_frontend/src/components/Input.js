import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import HiddenIcon from '../assets/icons/HiddenIcon';
import VisibleIcon from '../assets/icons/VisibleIcon';

export default function Input({ placeholder, value, setValue, keyboard, password }) {
    const [secure, setSecure] = useState(password ? true : false)

    const handleIconPress = () => {
        if (secure) return <HiddenIcon />
        return <VisibleIcon />
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder={placeholder}
                style={[styles.input, password && { width: '86%' }]}
                value={value}
                onChangeText={setValue}
                keyboardType={keyboard}
                secureTextEntry={secure} />
            {password && <Pressable onPress={() => setSecure(!secure)}>{handleIconPress}</Pressable>}
        </View >
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
        height: 38,
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