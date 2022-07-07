import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Input({ placeholder, value, setValue, keyboard, secureTextEntry }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={setValue}
                keyboardType={keyboard}
                secureTextEntry={secureTextEntry} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        alignItems: 'center'
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
    secureTextEntry: false,
}