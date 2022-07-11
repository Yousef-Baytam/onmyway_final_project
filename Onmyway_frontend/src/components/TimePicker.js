import { StyleSheet, View } from 'react-native';
import Time from './Time';

export default function TimePicker({ departureTime, setDepartureTime }) {
    return (
        <View style={styles.container}>
            <Time date={departureTime} setDate={setDepartureTime} placeholder={'Select a Date'} AuthInput={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: 100,
        alignItems: 'center',
        marginLeft: 20
    }
});