import { StyleSheet, View, Text, Modal } from 'react-native';
import StarRating from './StarRating';


export default function AllReviewsModal({ user, showAllReviews, setShowAllReviews }) {

    return (
        <Modal
            animationType="slide"
            visible={showAllReviews}
            onRequestClose={() => {
                setShowReviewModal(!setShowAllReviews);
            }}>
            <View style={styles.reviewContainer}>
                {/* <StarRating rating={newRating} setRating={setNewRating} />
                <Text style={styles.text}></Text> */}
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
});