import { StyleSheet, View } from 'react-native';
import RepeatIcon from '../assets/icons/RepeatIcon';
import Checkbox from 'expo-checkbox';
import DatePicker from './DatePicker';
import DayPicker from './DayPicker';

export default function DateInput({ repeat, setRepeat, date, setDate }) {
    return (
        <View style={styles.container}>
            <RepeatIcon />
            <Checkbox value={repeat} onValueChange={setRepeat} color={'#A1CCE4'} style={{ marginBottom: 20, marginHorizontal: 15 }} />
            {repeat ?
                <DayPicker /> :
                <DatePicker date={date} setDate={setDate} placeholder={'Date'} AuthInput={false} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '60%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});