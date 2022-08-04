import { StyleSheet, View, Text, Modal, FlatList } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CancelIcon from '../assets/icons/CancelIcon';
import ReviewCard from './ReviewCard';
import { useTheme } from '../context/ThemeContext';

export default function AllReviewsModal({ reviews, showAllReviews, setShowAllReviews }) {
    const { theme } = useTheme()

    return (
        <Modal
            animationType="slide"
            visible={showAllReviews}
            onRequestClose={() => {
                setShowAllReviews(!showAllReviews);
            }}>
            <View style={[styles.reviewContainer, { backgroundColor: theme.bg }]}>
                <Text style={[styles.text, { color: theme.text }]}>All Reviews</Text>
                <Pressable onPress={() => setShowAllReviews(false)} style={styles.cancel}>
                    <CancelIcon />
                </Pressable>
                {reviews ? <FlatList
                    data={reviews}
                    renderItem={({ item }) => (<>
                        <ReviewCard body={item.body} author={item.author} rating={item.rating} />
                    </>)}
                    style={{ width: '100%', marginLeft: 42 }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item._id}
                />
                    : <Text> No Reviews Yet!</Text>
                }
            </View>
        </Modal >
    );
}

const styles = StyleSheet.create({
    reviewContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        width: '90%',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20
    },
    cancel: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1
    }
});