import { useRoute } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Modal, TextInput } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CustomButton from '../../components/CustomButton';
import PressableText from '../../components/PressableText';
import ProfileOptions from '../../components/ProfileOptions';
import StarRating from '../../components/StarRating';
import UserImage from '../../components/UserImage';
import UserProfileBody from '../../components/UserProfileBody';
import { useUser } from '../../context/UserContext';
import { addNewReview, getUserReviews } from '../../controllers/userController'

export default function Profile({ navigation }) {

    const { user: loggedUser } = useUser()

    const route = useRoute()
    const param = route.params
    const [image, setImage] = useState(null)
    const [rating, setRating] = useState(0)
    const [user, setUser] = useState(null)
    const [optionsDisplay, setOptionsDisplay] = useState(false)
    const [showReviewModal, setShowReviewModal] = useState(false)

    const [newRating, setNewRating] = useState(2.5)
    const [review, setReview] = useState(null)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<ProfileOptions action={() => setOptionsDisplay(true)} />)
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

    const handleSubmitReview = async () => {
        const res = await addNewReview({ rating: newRating, body: review }, user._id)
        setShowReviewModal(false)
    }

    return (
        <Pressable style={styles.container} onPress={() => { optionsDisplay && setOptionsDisplay(false) }}>
            {
                optionsDisplay &&
                <View style={styles.userOptions}>
                    <PressableText text={'hello'} custom={{ width: '100%', height: '30%' }} />
                    <PressableText text={'hello'} custom={{ width: '100%', height: '30%' }} />
                    <PressableText text={'hello'} custom={{ width: '100%', height: '30%' }} />
                </View>
            }
            {
                user && <>
                    <View style={styles.imageView}>
                        <UserImage image={image} display={true} />
                    </View>
                    <StarRating rating={rating} display={true} />
                    <View style={styles.userContainer}>
                        <UserProfileBody user={user} display={true} />
                    </View>
                    <View>
                        <View style={styles.buttonContainer}>
                            <CustomButton text={'All Reviews'} custom={{ width: '40%' }} />
                            <CustomButton text={'Leave a Review'} custom={{ width: '40%' }} action={() => setShowReviewModal(true)} />
                        </View>
                    </View>
                </>
            }
            <Modal
                animationType="slide"
                visible={showReviewModal}
                onRequestClose={() => {
                    setModalVisible(!setShowReviewModal);
                }}>
                <View style={styles.reviewContainer}>
                    <StarRating rating={newRating} setRating={setNewRating} />
                    <TextInput style={styles.input}
                        onChangeText={setReview}
                        value={review}
                        multiline={true}
                        numberOfLines={5}
                        placeholder="Add a Review"
                        keyboardType="default" />
                    <View style={[styles.buttonContainer, { justifyContent: 'center' }]}>
                        <CustomButton text={'Cancel'} custom={{ width: '40%' }} action={() => setShowReviewModal(false)} />
                        <CustomButton text={'Submit'} custom={{ width: '40%' }} action={handleSubmitReview} />
                    </View>
                </View>
            </Modal>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',

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
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userOptions: {
        position: 'absolute',
        width: 100,
        height: 100,
        right: 20,
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    },
    reviewContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '90%',
        height: '20%',
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        padding: 20
    },
});