import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DateInput from '../../components/DateInput';
import LocationInput from '../../components/LocationInput';
import TimePicker from '../../components/TimePicker';
import { useUser } from '../../context/UserContext';

export default function NewPost({ navigation }) {
    const { user } = useUser()

    const [date, setDate] = useState(new Date())
    const [repeat, setRepeat] = useState(false)
    const [days, setDays] = useState({ monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false })
    const [departureTime, setDepartureTime] = useState(new Date())
    const [returnTime, setReturnTime] = useState(new Date())
    const [availableSeats, setAvailableSeats] = useState(3)
    const [preferedGender, setPreferredGender] = useState('any')
    const [shareExpenses, setShareExpences] = useState(true)
    const [musicPrefrence, setMusicPrefrence] = useState(user.musicPrefrences ?? null)
    return (
        <View style={styles.container}>
            <LocationInput text={'From'} color={'#92D293'} />
            <LocationInput text={'To'} color={'#D2686E'} />
            <DateInput repeat={repeat} setRepeat={setRepeat} date={date} setDate={setDate} setDays={setDays} days={days} />
            <TimePicker departureTime={departureTime} setDepartureTime={setDepartureTime} text={'Departure Time'} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});