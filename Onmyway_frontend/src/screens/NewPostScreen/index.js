import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AvailableSeats from '../../components/AvailableSeats';
import CustomButton from '../../components/CustomButton';
import DateInput from '../../components/DateInput';
import LocationInput from '../../components/LocationInput';
import MusicPrefrence from '../../components/MusicPrefrence';
import PreferredGenderPicker from '../../components/PreferredGenderPicker';
import ShareExpenses from '../../components/ShareExpenses';
import TimePicker from '../../components/TimePicker';
import { useUser } from '../../context/UserContext';
import { addPost } from '../../controllers/postsController';

export default function NewPost({ navigation }) {
    const { user } = useUser()

    const [date, setDate] = useState(new Date())
    const [repeat, setRepeat] = useState(false)
    const [days, setDays] = useState({ monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false })
    const [departureTime, setDepartureTime] = useState(new Date())
    const [resturnSet, setResturnSet] = useState(false)
    const [returnTime, setReturnTime] = useState(new Date())
    const [availableSeats, setAvailableSeats] = useState('3')
    const [preferredGender, setPreferredGender] = useState('any')
    const [shareExpenses, setShareExpences] = useState(true)
    const [musicPrefrence, setMusicPrefrence] = useState(user.musicPrefrences.length > 0 ? user.musicPrefrences : 'Any')

    const handleAddPost = async () => {
        try {
            let res
            if (repeat)
                res = await addPost({ repeat, days: JSON.stringify(days), departureTime, returnTime: resturnSet ? returnTime : 'Not Set', availableSeats, preferredGender, shareExpenses })
            else
                res = await addPost({ repeat, date, departureTime, returnTime: resturnSet ? returnTime : 'Not Set', availableSeats, preferredGender, shareExpenses })
            navigation.navigate('Browse')
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <LocationInput text={'From'} color={'#92D293'} />
                <LocationInput text={'To'} color={'#D2686E'} />
            </View>
            <View style={styles.view2}>
                <View style={{ height: 60, width: '100%', marginTop: 20 }}>
                    <DateInput repeat={repeat} setRepeat={setRepeat} date={date} setDate={setDate} setDays={setDays} days={days} />
                </View>
                <TimePicker time={departureTime} setTime={setDepartureTime} text={'Departure Time'} pressed={setResturnSet} departure={true} />
                <TimePicker time={returnTime} setTime={setReturnTime} text={'Retun Time (optional)'} pressed={setResturnSet} departure={false} />
                <AvailableSeats text={'Available Seats (3 max)'} availableSeats={availableSeats} setAvailableSeats={setAvailableSeats} />
                <PreferredGenderPicker value={preferredGender} setValue={setPreferredGender} items={[
                    { label: 'M', value: 'male' },
                    { label: 'F', value: 'female' },
                    { label: 'A', value: 'any' }
                ]} text={'Preferred Gender'} />
                <ShareExpenses text={'Share Expenses?'} value={shareExpenses} setValue={setShareExpences} />
                <MusicPrefrence text={'Music Prefrence'} value={musicPrefrence} />
            </View>
            <View style={{ marginTop: '10%' }}>
                <CustomButton text={'Confirm'} action={handleAddPost} />
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