import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function DatePicker({ date, setDate }) {
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)
    const [text, setText] = useState('Date of Birth')

    const onChange = (evt, pickedDate) => {
        const currDate = pickedDate || date
        setShow(Platform.OS === 'ios')
        setDate(pickedDate)

        const temp = new Date(pickedDate)
        const fDate = `${ temp.getDate() } / ${ temp.getMonth() } / ${ temp.getFullYear() }`
        setText(fDate)
    }

    const showMode = (mode) => {
        setShow(true)
        setMode(mode)
    }

    return (
        <View style={styles.inputContainer}>
            <View style={styles.input}>
                <Pressable onPress={() => showMode('date')}>
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
        paddingLeft: 10
    }
});