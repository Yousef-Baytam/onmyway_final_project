import { StyleSheet, View, Text, TextInput } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function AvailableSeats({ text, availableSeats, setAvailableSeats, keyboard, display }) {

    const { theme } = useTheme()

    const onChange = ({ nativeEvent }) => {
        if (parseInt(nativeEvent.text) > 3) setAvailableSeats('3')
        else if (parseInt(nativeEvent.text) < 1) setAvailableSeats('1')
        else if (isNaN(parseInt(nativeEvent.text))) setAvailableSeats('3')
        else setAvailableSeats(nativeEvent.text)
    }

    return (
        <View style={styles.container}>
            <View style={[styles.view, { borderColor: theme.outline }]}>
                <Text style={[styles.text, { color: theme.text }]}>{text}</Text>
            </View>
            <View style={[styles.view, { borderColor: theme.outline }]}>
                {display ?
                    <Text>{availableSeats}</Text>
                    : <TextInput value={availableSeats}
                        onChangeText={setAvailableSeats}
                        onEndEditing={onChange}
                        keyboardType={keyboard}
                        style={{ color: theme.text }}
                    />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: 80,
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

AvailableSeats.defaultProps = {
    keyboard: 'number-pad',
    display: false
}