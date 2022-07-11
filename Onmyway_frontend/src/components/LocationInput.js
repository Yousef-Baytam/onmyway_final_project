import { StyleSheet, Text, View } from 'react-native';

export default function LocationInput({ text, color }) {

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
    indicator: {

    }
});

Input.defaultProps = {
    keyboard: 'default',
}