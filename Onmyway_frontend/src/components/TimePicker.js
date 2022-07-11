import { StyleSheet, View, Text } from 'react-native';
import Time from './Time';

export default function TimePicker({ departureTime, setDepartureTime }) {
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text>Departure Time</Text>
            </View>
            <View style={styles.view}>
                <Time date={departureTime} setDate={setDepartureTime} placeholder={'Select a Date'} AuthInput={false} />
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
        backgroundColor: "#abc"
    },
    view: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.2,
        paddingBottom: 10
    },
});