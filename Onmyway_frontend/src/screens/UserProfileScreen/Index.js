import { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PressableText from '../../components/PressableText';
import StarRating from '../../components/StarRating';
import UserProfileBody from '../../components/UserProfileBody';
import { useUser } from '../../context/UserContext';

export default function UserProfile({ navigation }) {
    const { user } = useUser()
    const [rating, setRating] = useState(Math.round(user.reviews.reduce((a, b) => a + b.rating, 0) / user.reviews.length))

    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={require('../../assets/blank-profile.webp')} />
            </View>
            <StarRating rating={rating} display={true} />
            <View style={styles.userContainer}>
                <UserProfileBody user={user} />
            </View>
            <View>
                <View style={styles.ridesRn}>
                    <PressableText text={'Rides Offered'} />
                    <PressableText text={'Rides Joined'} />
                </View>
                <View style={styles.ridesRn}>
                    <PressableText text={'Rides Offered'} />
                    <PressableText text={'Rides Joined'} />
                </View>
            </View>
            <View>
                <View>
                    {/* Button */}
                </View>
            </View>
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
    imageView: {
        width: 180,
        height: 180,
        elevation: 5,
        borderRadius: 100,
    },
    image: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
    },
    userContainer: {
        width: '90%',
        height: 220,
        marginBottom: 20
    },
    ridesRn: {
        width: '40%',
        height: 50,
        flexDirection: 'row'
    }
});