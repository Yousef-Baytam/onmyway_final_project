import moment from 'moment';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, LayoutAnimation } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import HistoryIcon from '../../assets/icons/HistoryIcon';
import AllReviewsModal from '../../components/AllReviewsModal';
import CustomButton from '../../components/CustomButton';
import PostsModal from '../../components/PostsModal';
import PressableText from '../../components/PressableText';
import StarRating from '../../components/StarRating';
import UserImage from '../../components/UserImage';
import UserProfileBody from '../../components/UserProfileBody';
import { useUser } from '../../context/UserContext';
import { getUserPost } from '../../controllers/postsController';
import { getJoinedPosts } from '../../controllers/userController';
import { useTheme } from '../../context/ThemeContext';

export default function UserProfile({ navigation }) {
    const [visible, setVisible] = useState(false)
    const { user, handleUser } = useUser()
    const [image, setImage] = useState(user?.image && Object.keys(user.image).length ? user.image.url : null);
    const [rating, setRating] = useState(user.reviews.length ? Math.round((user.reviews.reduce((a, b) => a + b.rating, 0) / user.reviews.length) * 2) / 2 : 0)
    const [showAllReviews, setShowAllReviews] = useState(false)
    const [myRides, setMyRides] = useState([])
    const [ridesJoined, setRidesJoined] = useState([])
    const [showJoinedRidesModal, setShowJoinedRidesModal] = useState(false)
    const [showJoinedRidesHistoryModal, setShowJoinedRidesHistoryModal] = useState(false)
    const [showMyRidesModal, setShowMyRidesModal] = useState(false)
    const [showMyRidesHistoryModal, setShowMyRidesHistoryModal] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        (async () => {
            const res = await getJoinedPosts()
            setRidesJoined(res)
            const resu = await getUserPost()
            setMyRides(resu.results)
        })()
    }, [])

    return (
        <Pressable style={[styles.container, { backgroundColor: theme.bg }]} onPress={() => {
            if (visible) {
                LayoutAnimation.configureNext(
                    LayoutAnimation.create(100, 'easeInEaseOut', 'scaleXY')
                )
                setVisible(false)
            }
        }}>
            <View style={styles.imageView}>
                <UserImage image={image} setImage={setImage} handleUser={handleUser} setVisible={setVisible} visible={visible} />
            </View>
            <StarRating rating={rating} display={true} />
            <View style={styles.userContainer}>
                <UserProfileBody user={user} />
            </View>
            <View style={{ justifyContent: 'center', width: '100%' }}>
                <View style={styles.ridesRn}>
                    <PressableText text={'Rides Offered'} action={() => setShowMyRidesModal(true)} custom={[styles.ridesMenu, { borderColor: "#005A9C" }]} />
                    <PressableText text={'Rides Joined'} action={() => setShowJoinedRidesModal(true)} custom={[styles.ridesMenu, { borderColor: "#005A9C" }]} />
                </View>
                <View style={styles.ridesRn}>
                    <HistoryIcon />
                    <PressableText text={'History Offered'} action={() => setShowMyRidesHistoryModal(true)} custom={[styles.ridesMenu, { borderColor: "#005A9C" }]} />
                    <PressableText text={'History Joined'} action={() => setShowMyRidesHistoryModal(true)} custom={[styles.ridesMenu, { borderColor: "#005A9C" }]} />
                    <HistoryIcon />
                </View>
            </View>
            <View>
                <View style={styles.buttonContainer}>
                    <CustomButton text={'My Reviews'} action={() => setShowAllReviews(true)} />
                </View>
            </View>
            <AllReviewsModal user={user} showAllReviews={showAllReviews} setShowAllReviews={setShowAllReviews} />
            <PostsModal text={'Joined'} show={showJoinedRidesModal} setShow={setShowJoinedRidesModal} data={ridesJoined.filter((i) => (moment(i.date) >= moment() || i.repeat))} />
            <PostsModal text={'Joined History'} show={showJoinedRidesHistoryModal} setShow={setShowJoinedRidesHistoryModal} data={ridesJoined.filter((i) => (moment(i.date) < moment()))} />
            <PostsModal text={'My Rides'} show={showMyRidesModal} setShow={setShowMyRidesModal} data={myRides.filter((i) => (moment(i.date) >= moment() || i.repeat))} />
            <PostsModal text={'My Rides History'} show={showMyRidesHistoryModal} setShow={setShowMyRidesHistoryModal} data={myRides.filter((i) => (moment(i.date) < moment()))} />
        </Pressable >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    ridesMenu: {
        borderBottomWidth: 1,
        width: 100,
        margin: 10
    },
    imageView: {
        width: 180,
        height: 180,
        elevation: 5,
        borderRadius: 100,
        marginTop: 20,
        zIndex: 1
    },
    userContainer: {
        width: '90%',
        height: 220,
        marginBottom: 20,
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