import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Input({ placeholder, value, setValue, keyboard }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder={placeholder} style={styles.input} value={value} onChangeText={setValue} keyboardType={keyboard} />
        </View>
    );
}

const styles = StyleSheet.create({

});