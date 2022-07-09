import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';


export default function RadioButtonList({ items, checked, setChecked }) {

    const handleButtons = () => {
        return (
            <View style={styles.input}>
                {items.map((i) => {
                    return (
                        <>
                            <Text>{i.label}</Text>
                            <RadioButton
                                color='#005A9C'
                                value={i.value}
                                status={checked === i.value ? 'checked' : 'unchecked'}
                                onPress={() => setChecked(i.value)}
                            />
                        </>
                    )
                })}
            </View>
        )
    }

    return (
        <View style={styles.inputContainer}>
            {handleButtons()}
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