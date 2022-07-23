import DateTimePicker from '@react-native-community/datetimepicker'
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import moment from 'moment'
import { useTheme } from '../context/ThemeContext';

export default function Time({ date, setDate, placeholder, AuthInput, display }) {
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')
    const { theme } = useTheme()

    useEffect(() => {
        !display && setText(placeholder)
    }, [])

    const onChange = (evt, pickedDate) => {
        setShow(Platform.OS === 'ios')
        setDate(pickedDate)

        const temp = new Date(pickedDate)
        const fDate = moment(temp).format("HH:mm")
        setText(fDate)
    }

    const showMode = (mode) => {
        setShow(true)
        setMode(mode)
    }

    return (
        <View style={[styles.inputContainer, { width: !AuthInput ? '76%' : '85%' }]}>
            <View style={[styles.input, { borderBottomWidth: AuthInput ? 0.2 : 0, paddingBottom: AuthInput ? 10 : 5 }]}>
                {display ?
                    <Text >{date === 'Invalid date' ? '—' : date}</Text>
                    : <Pressable onPress={() => showMode('time')}>
                        <Text style={{ color: theme.text }}>{text}</Text>
                    </Pressable>
                }
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

    }
});

Time.defaultProps = {
    AuthInput: true,
    placeholder: 'Date of Birth',
    display: false
}