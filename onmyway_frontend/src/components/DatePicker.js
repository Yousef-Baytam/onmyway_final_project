import DateTimePicker from '@react-native-community/datetimepicker'
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import moment from 'moment'
import { useTheme } from '../context/ThemeContext';

export default function DatePicker({ date, setDate, placeholder, AuthInput, display, custom, notThemed }) {
    const { theme } = useTheme()
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')

    useEffect(() => {
        setText(placeholder)
    }, [])

    const onChange = (evt, pickedDate) => {
        setShow(Platform.OS === 'ios')
        setDate(pickedDate)

        const temp = new Date(pickedDate)
        const fDate = moment(temp).format('MMMM Do YYYY')
        setText(fDate)
    }

    const showMode = (mode) => {
        setShow(true)
        setMode(mode)
    }

    return (
        <View style={[styles.inputContainer, { width: !AuthInput ? '76%' : '85%' }]}>
            <View style={[styles.input, { borderBottomWidth: AuthInput ? 0.2 : 0, paddingBottom: AuthInput ? 10 : 5 }, custom]}>
                {
                    display ?
                        <Text style={{ color: notThemed ? '#000' : theme.text }}>{moment(date).format('MMMM Do YYYY')}</Text>
                        : <Pressable onPress={() => showMode('date')}>
                            <Text style={{ color: notThemed ? '#000' : theme.text }}>{text}</Text>
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
        width: '95%',
        borderColor: 'rgba(0,0,0, 0.7)',
        marginTop: 8,
        paddingLeft: 10
    }
});

DatePicker.defaultProps = {
    AuthInput: true,
    placeholder: 'Date of Birth',
    display: false,
    custom: {},
    notThemed: false
}