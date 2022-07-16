import { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import HistoryIcon from '../../assets/icons/HistoryIcon';
import CustomButton from '../../components/CustomButton';
import PressableText from '../../components/PressableText';
import StarRating from '../../components/StarRating';
import UserImage from '../../components/UserImage';
import UserProfileBody from '../../components/UserProfileBody';

export default function Profile({ navigation }) {
    const [image, setImage] = useState(user.image.url || null);
    const [rating, setRating] = useState(Math.round((user.reviews.reduce((a, b) => a + b.rating, 0) / user.reviews.length) * 2) / 2)

    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <UserImage image={image} setImage={setImage} handleUser={handleUser} />
            </View>
            <StarRating rating={rating} display={true} />
            <View style={styles.userContainer}>
                <UserProfileBody user={user} />
            </View>
            <View style={{ justifyContent: 'center', width: '100%' }}>
                <View style={styles.ridesRn}>
                    <PressableText text={'Rides Offered'} />
                    <PressableText text={'Rides Joined'} />
                </View>
                <View style={styles.ridesRn}>
                    <HistoryIcon />
                    <PressableText text={'Rides Offered'} />
                    <PressableText text={'Rides Joined'} />
                    <HistoryIcon />
                </View>
            </View>
            <View>
                <View style={styles.buttonContainer}>
                    <CustomButton text={'My Reviews'} />
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
        justifyContent: 'space-between',

    },
    imageView: {
        width: 180,
        height: 180,
        elevation: 5,
        borderRadius: 100,
        marginTop: 20
    },
    userContainer: {
        width: '90%',
        height: 220,
        marginBottom: 20
    },
    ridesRn: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        width: '100%',
        marginVertical: 20
    }
});