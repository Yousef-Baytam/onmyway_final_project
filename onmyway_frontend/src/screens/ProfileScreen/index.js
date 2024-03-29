import { useRoute } from '@react-navigation/native';
import { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import AllReviewsModal from '../../components/AllReviewsModal';
import CustomButton from '../../components/CustomButton';
import NewReviewModal from '../../components/NewReviewModal';
import PressableText from '../../components/PressableText';
import ProfileOptions from '../../components/ProfileOptions';
import ReportModal from '../../components/ReportModal';
import StarRating from '../../components/StarRating';
import UserImage from '../../components/UserImage';
import UserProfileBody from '../../components/UserProfileBody';
import { useTheme } from '../../context/ThemeContext';
import { useUser } from '../../context/UserContext';
import { addChatRoom, getChatRoom } from '../../controllers/firebaseControllers/chatRooms';
import { addNewReview, blockUser, getUserReviews, getUsers, updateReview } from '../../controllers/userController'

export default function Profile({ navigation }) {

    const { user: loggedUser, handleUser } = useUser()
    const { theme } = useTheme()

    const route = useRoute()
    const param = route.params
    const [image, setImage] = useState(null)
    const [rating, setRating] = useState(0)
    const [user, setUser] = useState(null)
    const [optionsDisplay, setOptionsDisplay] = useState(false)
    const [showReviewModal, setShowReviewModal] = useState(false)
    const [loggedUserReview, setLoggedUserReview] = useState(null)
    const [showAllReviews, setShowAllReviews] = useState(false)
    const [showReportModal, setShowReportModal] = useState(false)
    const [reportTitle, setReportTitle] = useState(null)
    const [reportDesc, setReportDesc] = useState(null)
    const [newRating, setNewRating] = useState(2.5)
    const [review, setReview] = useState(null)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (<ProfileOptions action={() => setOptionsDisplay(true)} />)
        })
        const getOldRev = async () => {
            try {
                const reviews = await getUserReviews(param._id)
                setUser({ ...param, reviews })
                const oldLoggedUserReview = reviews.find(e => e.author._id == loggedUser._id)
                if (oldLoggedUserReview) {
                    setLoggedUserReview(oldLoggedUserReview)
                    setReview(oldLoggedUserReview.body)
                    setNewRating(oldLoggedUserReview.rating)
                }
            } catch (e) {
                console.log(e)
            }
        }
        getOldRev()
    }, [])

    useLayoutEffect(() => {
        if (user) {
            setImage(user.hasOwnProperty('image') && Object.keys(user.image).length ? user.image.url : null)
            setRating(user.reviews.length ? Math.round((user.reviews.reduce((a, b) => a + b.rating, 0) / user.reviews.length) * 2) / 2 : 0)
        }
    }, [user])

    const handleSubmitReview = async () => {
        try {
            const res = await addNewReview({ rating: newRating, body: review }, user._id)
            setShowReviewModal(false)
        } catch (e) {
            alert('Error posting the review, try again')
        }
    }

    const handleUpdateReview = async () => {
        try {
            const res = await updateReview({ rating: newRating, body: review }, loggedUserReview._id)
            setShowReviewModal(false)
        } catch (e) {
            alert('Error posting the review, try again')
        }
    }

    const handleBlockUser = async () => {
        try {
            await blockUser(user._id)
            handleUser({ ...loggedUser, blocked: [...loggedUser.blocked, user._id] })
            navigation.navigate('Browse')
        } catch (e) {
            alert('Cant perfom this action right now')
        }
    }

    const editConfirmationAlert = () => {
        return Alert.alert('Confirm Action', 'Are you sure you want to block this user?',
            [
                {
                    text: 'No',
                },
                {
                    text: 'Yes',
                    onPress: handleBlockUser
                }
            ])
    }

    const handleCreateChatRoom = async () => {
        try {
            let room
            if (room = await getChatRoom(loggedUser._id, user._id) || await getChatRoom(user._id, loggedUser._id)) {
                const res = await getUsers([user._id])
                return navigation.navigate('Chat', { ...res[0], chatRoomId: room.id, userTag: room.users1.userId == res[0]._id ? 'users1' : 'users2' })
            }
            let newRoom = await addChatRoom(loggedUser.email, user.email,
                loggedUser._id, user._id,
                loggedUser.username, user.username,
                loggedUser.hasOwnProperty('image') ? Object.keys(loggedUser.image).length > 0 ? loggedUser.image.url : null : null,
                user.hasOwnProperty('image') ? Object.keys(user.image).length > 0 ? user.image.url : null : null)
            const res = await getUsers([user._id])
            navigation.navigate('Chat', { ...res[0], chatRoomId: newRoom.id, userTag: 'users2' })
        } catch (e) {
            alert('Error creating the chat room! try again later')
        }
    }

    return (
        <Pressable style={[styles.container, { backgroundColor: theme.bg }]} onPress={() => { optionsDisplay && setOptionsDisplay(false) }}>
            {
                optionsDisplay &&
                <View style={[styles.userOptions, { backgroundColor: theme.postCard }]}>
                    <PressableText text={'Contact'} custom={{ width: '100%', height: '30%' }} customText={{ textAlign: 'left', width: '100%', marginLeft: 20 }}
                        textContainerStyle={{ width: '100%' }} action={handleCreateChatRoom} />
                    <PressableText text={'Report'} custom={{ width: '100%', height: '30%' }} customText={{ textAlign: 'left', width: '100%', marginLeft: 20 }}
                        textContainerStyle={{ width: '100%' }} action={() => setShowReportModal(true)} />
                    <PressableText text={'Block'} custom={{ width: '100%', height: '30%' }} customText={{ textAlign: 'left', width: '100%', marginLeft: 20 }}
                        textContainerStyle={{ width: '100%' }} action={editConfirmationAlert} />
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
                            <CustomButton text={'All Reviews'} custom={{ width: '40%' }} action={() => setShowAllReviews(true)} />
                            <CustomButton text={'Leave a Review'} custom={{ width: '40%' }} action={() => setShowReviewModal(true)} />
                        </View>
                    </View>
                    <NewReviewModal showReviewModal={showReviewModal}
                        setShowReviewModal={setShowReviewModal}
                        handleSubmitReview={handleSubmitReview}
                        handleUpdateReview={handleUpdateReview}
                        review={review} setReview={setReview}
                        setNewRating={setNewRating} newRating={newRating}
                        loggedUserReview={loggedUserReview} />
                    <AllReviewsModal reviews={user.reviews} showAllReviews={showAllReviews} setShowAllReviews={setShowAllReviews} />
                    <ReportModal showReportModal={showReportModal}
                        setShowReportModal={setShowReportModal}
                        setReportTitle={setReportTitle} reportTitle={reportTitle}
                        setReportDesc={setReportDesc} reportDesc={reportDesc} id={user._id} />
                </>
            }
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
        marginTop: 20,
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
});