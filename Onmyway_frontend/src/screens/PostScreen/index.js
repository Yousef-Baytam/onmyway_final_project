import { StyleSheet, View, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AvailableSeats from '../../components/AvailableSeats';
import CustomButton from '../../components/CustomButton';
import DateInput from '../../components/DateInput';
import LocationInput from '../../components/LocationInput';
import MusicPrefrence from '../../components/MusicPrefrence';
import PreferredGenderPicker from '../../components/PreferredGenderPicker';
import ShareExpenses from '../../components/ShareExpenses';
import TimePicker from '../../components/TimePicker';
import { useLayoutEffect, useState } from 'react';
import { useUser } from '../../context/UserContext'
import { joinPost } from '../../controllers/postsController';

export default function Post({ navigation }) {
    const { user } = useUser()
    const route = useRoute()
    const [joined, setJoined] = useState('noRequest') //enum=[noRequest, pending, approved, declined]

    const data = route.params
    let days
    if (data.days)
        days = JSON.parse(data.days)
    else days = ''
    console.log(data)

    useLayoutEffect(() => {
        let ids = data.joinRequests.filter(i => i.joined)
        if (ids.includes(user._id)) {
            let userJoinRequestStatus = data.joinRequests.find(i => i.joined == user._id)
            setJoined(userJoinRequestStatus.status)
        }
    }, [])

    const handleJoinPost = async () => {
        try {
            if (!data.remainingSeats)
                return Alert.alert('No Available Seats', 'There are no available seats in this ride at the moment')
            const res = await joinPost(data._id)
            if (res.success)
                setJoined('pending')
            else
                Alert.alert('Unable to Join', 'Error joining this ride, try again later')
        } catch (e) {
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
                    <DateInput repeat={data.repeat} date={data.date} days={days} display={true} />
                </View>
                <TimePicker time={data.departureTime} text={'Departure Time'} display={true} />
                <TimePicker time={data.returnTime} text={'Return Time'} display={true} />
                <AvailableSeats text={'Available Seats'} availableSeats={data.remainingSeats} display={true} />
                <PreferredGenderPicker value={data.preferredGender} text={'Preferred Gender'} display={true} />
                <ShareExpenses text={'Share Expenses?'} value={data.shareExpenses} display={true} />
                <MusicPrefrence text={'Music Prefrence'} value={data.owner.musicPrefrence || 'Any'} />
            </View>
            <View style={{ marginTop: '10%', flexDirection: 'row' }}>
                <CustomButton text={'User Profile'} action={() => navigation.navigate('Profile', data.owner)} />
                {
                    !data.remainingSeats && joined == 'noRequest' ?
                        null
                        :
                        joined == 'noRequest' ?
                            <CustomButton text={'Join Request'} action={handleJoinPost} />
                            : null
                }
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