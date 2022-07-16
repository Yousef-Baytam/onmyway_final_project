import { StyleSheet, View, TextInput, Modal } from 'react-native';
import CustomButton from './CustomButton';
import StarRating from './StarRating';


export default function NewReviewModal({ showReviewModal, setShowReviewModal, handleUpdateReview, handleSubmitReview, review, setReview, newRating, loggedUserReview, setNewRating }) {

    return (
        <Modal
            animationType="slide"
            visible={showReviewModal}
            onRequestClose={() => {
                setShowReviewModal(!showReviewModal);
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
                    {
                        loggedUserReview ?
                            <CustomButton text={'Update Review'} custom={{ width: '40%' }} action={handleSubmitReview} />
                            : <CustomButton text={'Submit'} custom={{ width: '40%' }} action={handleUpdateReview} />
                    }

                </View>
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
    input: {
        width: '90%',
        height: '20%',
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
        padding: 20
    },
});