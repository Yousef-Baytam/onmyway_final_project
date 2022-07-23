import { StyleSheet, View, Text, Image } from 'react-native';
import StarRating from './StarRating';

export default function ReviewCard({ body, author, rating }) {

    return (
        <View style={styles.container}>
            <View style={styles.authorInfo}>
                <Image source={{ uri: author.image.url } || require('../assets/blank-profile.webp')} style={styles.image} />
                <Text>{author.username}</Text>
            </View>
            <StarRating rating={rating} display={true} review={true} custom={{ justifyContent: 'flex-start' }} />
            <Text style={styles.text}>{body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#EAEAEA',
        borderRadius: 10
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        marginRight: 20
    },
    authorInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        paddingHorizontal: 20,
        paddingVertical: 10
    }
});
