import DateTimePicker from '@react-native-community/datetimepicker'
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function Time({ date, setDate, placeholder, AuthInput }) {
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')

    useEffect(() => {
        setText(placeholder)
    }, [])

    const onChange = (evt, pickedDate) => {
        const currDate = pickedDate || date
        setShow(Platform.OS === 'ios')
        setDate(pickedDate)

        const temp = new Date(pickedDate)
        const fDate = `${ temp.getHours() } : ${ temp.getMinutes() }`
        setText(fDate)
    }

    const showMode = (mode) => {
        setShow(true)
        setMode(mode)
    }

    return (
        <View style={[styles.inputContainer, { width: !AuthInput ? '76%' : '85%' }]}>
            <View style={[styles.input, { borderBottomWidth: AuthInput ? 0.2 : 0, paddingBottom: AuthInput ? 10 : 5 }]}>
                <Pressable onPress={() => showMode('time')}>
                    <Text >{text}</Text>
                </Pressable>
            </View>
            {show && <DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode={mode}
                display='default'
                onChange={onChange}
            />}
        </View >
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'flex-start',
        flexDirection: "row",
        justifyContent: 'center'
    },
    input: {
        width: '95%',
        borderColor: 'rgba(0,0,0, 0.7)',
        marginBottom: 25,
        marginTop: 8,
        paddingLeft: 10
    }
});

Time.defaultProps = {
    AuthInput: true,
    placeholder: 'Date of Birth'
}