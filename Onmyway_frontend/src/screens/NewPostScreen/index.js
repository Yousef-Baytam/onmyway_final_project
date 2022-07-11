import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useUser } from '../../context/UserContext';

export default function NewPost({ navigation }) {
    const { user } = useUser()

    const [date, setDate] = useState(new Date())
    const [repeat, setRepeat] = useState(false)
    const [days, setDays] = useState({ monday: false, tuesday: false, wednesday: false, thursday: false, friday: false, saturday: false, sunday: false })
    const [departureTime, setDepartureTime] = useState(null)
    const [returnTime, setReturnTime] = useState(null)
    const [availableSeats, setAvailableSeats] = useState(3)
    const [preferedGender, setPreferredGender] = useState('any')
    const [shareExpenses, setShareExpences] = useState(true)
    const [musicPrefrence, setMusicPrefrence] = useState(user.musicPrefrences ?? null)
    return (
        <View style={styles.container}>
            <Text>New POST YAAAYY!!!</Text>
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