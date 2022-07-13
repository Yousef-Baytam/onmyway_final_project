import { StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AvailableSeats from '../../components/AvailableSeats';
import CustomButton from '../../components/CustomButton';
import DateInput from '../../components/DateInput';
import LocationInput from '../../components/LocationInput';
import MusicPrefrence from '../../components/MusicPrefrence';
import PreferredGenderPicker from '../../components/PreferredGenderPicker';
import ShareExpenses from '../../components/ShareExpenses';
import TimePicker from '../../components/TimePicker';

export default function Post({ navigation }) {
    const route = useRoute()
    const data = route.params
    let days
    if (data.days)
        days = JSON.parse(data.days)
    else days = ''

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <LocationInput text={'From'} color={'#92D293'} />
                <LocationInput text={'To'} color={'#D2686E'} />
            </View>
            <View style={styles.view2}>
                <View style={{ height: 60, width: '100%', marginTop: 20 }}>
                    <DateInput repeat={data.repeat} date={data.date} days={days} display={true} />
                </View>
                <TimePicker time={data.departureTime} text={'Departure Time'} display={true} />
                <TimePicker time={data.returnTime} text={'Return Time'} display={true} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view1: {
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view2: {
        height: 500
    }
});