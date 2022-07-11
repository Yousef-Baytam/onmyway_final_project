import { StyleSheet, View, Text, Input } from 'react-native';
import Time from './Time';

export default function TimePicker({ text, departureTime, setDepartureTime }) {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View style={styles.view}>
                <Input />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    view: {

        width: '50%',
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