import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function BodyElement({ keyWord, value, editMode, editType, keyboard }) {

    return (
        <View style={styles.container}>
            <View style={styles.keyStyle}>
                <Text>{keyWord}</Text>
            </View>
            <View style={styles.valueStyle}>
                {
                    editMode ?
                        editType == 'input' ?
                            <TextInput style={styles.input}
                                value={value}
                                onChangeText={setValue}
                                keyboardType={keyboard} />
                            : null
                        : <Text>{value}</Text>
                }

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

