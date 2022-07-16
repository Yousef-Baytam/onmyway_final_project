import { useRoute } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import HistoryIcon from '../../assets/icons/HistoryIcon';
import CustomButton from '../../components/CustomButton';
import PressableText from '../../components/PressableText';
import ProfileOptions from '../../components/ProfileOptions';
import StarRating from '../../components/StarRating';
import UserImage from '../../components/UserImage';
import UserProfileBody from '../../components/UserProfileBody';
import { getUserReviews } from '../../controllers/userController'

export default function Profile({ navigation }) {
    const route = useRoute()
    const param = route.params
    const [image, setImage] = useState(null)
    const [rating, setRating] = useState(0)
    const [user, setUser] = useState(null)


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<ProfileOptions />)
        })
        try {
            (async () => {
                const reviews = await getUserReviews(param._id)
                setUser({ ...param, reviews })
            })()
        } catch (e) {
            console.log(e)
        }
    }, [])

    useLayoutEffect(() => {
        if (user) {
            setImage(user.image.url || null)
            setRating(Math.round((user.reviews.reduce((a, b) => a + b.rating, 0) / user.reviews.length) * 2) / 2)
        }
    }, [user])

    return (
        <View style={styles.container}>
            <View style={styles.userOptions}>
                <PressableText text={'hello'} />
            </View>
            {
                user && <>
                    <View style={styles.imageView}>
                        <UserImage image={image} setImage={setImage} />
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
                </>
            }
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
    },
    userOptions: {
        position: 'absolute',
        width: 100,
        height: 100,
        right: 20,
        backgroundColor: '#EAEAEA'
    }
});