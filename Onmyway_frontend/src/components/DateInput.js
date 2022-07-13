import { StyleSheet, View } from 'react-native';
import RepeatIcon from '../assets/icons/RepeatIcon';
import Checkbox from 'expo-checkbox';
import DatePicker from './DatePicker';
import DayPicker from './DayPicker';

export default function DateInput({ repeat, setRepeat, date, setDate, setDays, days, display }) {
    return (
        <View style={styles.container}>
            <RepeatIcon />
            {
                display ? <Checkbox value={repeat} style={styles.checkBox} color={'#A1CCE4'} disabled={true} /> :
                    <Checkbox value={repeat} onValueChange={setRepeat} color={'#A1CCE4'} style={styles.checkBox} />
            }
            {repeat ?
                <DayPicker setDays={setDays} days={days} display={display} /> :
                <DatePicker date={date} setDate={setDate} placeholder={'Select a Date'} AuthInput={false} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkBox: { marginBottom: 20, marginHorizontal: 18, width: 15, height: 15 }
});

DateInput.defaultProps = {
    display: false
}