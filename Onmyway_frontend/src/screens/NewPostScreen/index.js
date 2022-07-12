import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AvailableSeats from '../../components/AvailableSeats';
import DateInput from '../../components/DateInput';
import LocationInput from '../../components/LocationInput';
import MusicPrefrence from '../../components/MusicPrefrence';
import PreferredGenderPicker from '../../components/PreferredGenderPicker';
import ShareExpenses from '../../components/ShareExpenses';
import TimePicker from '../../components/TimePicker';
import { useUser } from '../../context/UserContext';

export default function NewPost({ navigation }) {
    const { user } = useUser()

    const [date, setDate] = useState(new Date())
    const [repeat, setRepeat] = useState(false)
    const [days, setDays] = useState({ monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false })
    const [departureTime, setDepartureTime] = useState(new Date())
    const [returnTime, setReturnTime] = useState(new Date())
    const [availableSeats, setAvailableSeats] = useState('3')
    const [preferedGender, setPreferredGender] = useState('any')
    const [shareExpenses, setShareExpences] = useState(true)
    const [musicPrefrence, setMusicPrefrence] = useState(user.musicPrefrences.length > 0 ? user.musicPrefrences : 'Any')

    return (
        <View style={styles.container}>
            <LocationInput text={'From'} color={'#92D293'} />
            <LocationInput text={'To'} color={'#D2686E'} />
            <DateInput repeat={repeat} setRepeat={setRepeat} date={date} setDate={setDate} setDays={setDays} days={days} />
            <TimePicker time={departureTime} setTime={setDepartureTime} text={'Departure Time'} />
            <TimePicker time={returnTime} setTime={setReturnTime} text={'Retun Time (optional)'} />
            <AvailableSeats text={'Available Seats (3 max)'} availableSeats={availableSeats} setAvailableSeats={setAvailableSeats} />
            <PreferredGenderPicker value={preferedGender} setValue={setPreferredGender} items={[
                { label: 'M', value: 'male' },
                { label: 'F', value: 'female' },
                { label: 'Any', value: 'any' }
            ]} text={'Preferred Gender'} />
            <ShareExpenses text={'Share Expenses?'} value={shareExpenses} setValue={setShareExpences} />
            <MusicPrefrence text={'Music Prefrence'} value={musicPrefrence} />
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
});