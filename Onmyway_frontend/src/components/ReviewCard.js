import { StyleSheet, View, Text, Image } from 'react-native';
import StarRating from './StarRating';

export default function ReviewCard({ body, author, rating }) {

    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: author.image.url } || require('../assets/blank-profile.webp')} style={styles.image} />
                <Text>{author.username}</Text>
            </View>
            <StarRating rating={rating} display={true} review={true} />
            <Text style={styles.text}>{body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 10,
        marginVertical: 20,
        backgroundColor: '#EAEAEA',
        borderRadius: 10
    },
    image: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
    }
});
