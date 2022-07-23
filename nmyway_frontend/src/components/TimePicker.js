import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Time from './Time';

export default function TimePicker({ text, time, setTime, pressed, departure, display }) {
    const { theme } = useTheme()
    const onChange = (e) => {
        setTime(e)
        pressed(true)
    }

    return (
        <View style={styles.container}>
            <View style={[styles.view, { borderColor: theme.outline }]}>
                <Text style={[styles.text, { color: theme.text }]}>{text}</Text>
            </View>
            <View style={[styles.view, { borderColor: theme.outline }]}>
                <Time date={time} setDate={onChange} placeholder={'Select a Time'} AuthInput={false} display={display} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    view: {
        width: '50%',
        height: 73,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.2,
        paddingVertical: 25,
        borderColor: 'rgba(0,0,0, 0.7)',
    },
    text: {
        paddingBottom: 5,
    }
});

TimePicker.defaultProps = {
    display: false
}