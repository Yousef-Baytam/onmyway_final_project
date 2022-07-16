import { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CancelIcon from '../assets/icons/CancelIcon';
import StarRating from './StarRating';


export default function AllReviewsModal({ user, showAllReviews, setShowAllReviews }) {
    const [reviews, setReviews] = useState(null)

    return (
        <Modal
            animationType="slide"
            visible={showAllReviews}
            onRequestClose={() => {
                setShowAllReviews(!showAllReviews);
            }}>
            <View style={styles.reviewContainer}>
                <Pressable onPress={() => setShowAllReviews(false)} style={styles.cancel}>
                    <CancelIcon />
                </Pressable>
                {reviews && <FlatList
                    data={reviews}
                    renderItem={({ item }) => (<>
                        <StarRating rating={item.rating} setRating={setNewRating} />
                        <Text style={styles.text}></Text>
                    </>)}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item._id}
                />}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    reviewContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        width: '100%',
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        width: '90%',
        height: '20%',
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        padding: 20
    },
    cancel: {
        position: 'absolute',
        top: 10,
        right: 10
    }
});