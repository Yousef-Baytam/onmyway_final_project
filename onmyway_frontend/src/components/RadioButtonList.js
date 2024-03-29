import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useTheme } from '../context/ThemeContext';


export default function RadioButtonList({ items, checked, setChecked, AuthInput, custom, notThemed }) {
    const { theme } = useTheme()

    const handleButtons = () => {
        return (
            <View style={[styles.input, { borderBottomWidth: AuthInput ? 0.2 : 0, paddingBottom: AuthInput ? 10 : 0, marginBottom: AuthInput ? 25 : 0, }, custom]}>
                {items.map((i) => {
                    return (
                        <View key={i.label} style={{ flexDirection: 'row', alignItems: 'center', height: 20 }}>
                            <Text style={{ color: notThemed ? '#000' : theme.text }}>{i.label}</Text>
                            <RadioButton
                                color='#005A9C'
                                value={i.value}
                                status={checked === i.value ? 'checked' : 'unchecked'}
                                onPress={() => setChecked(i.value)}
                            />
                        </View>
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
        paddingBottom: 5,
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: 'center'
    }
});

RadioButtonList.defaultProps = {
    AuthInput: true,
    items: [
        { label: 'M', value: 'male' },
        { label: 'F', value: 'female' },
        { label: 'O', value: 'other' }
    ],
    custom: {},
    notThemed: false
}