import { StyleSheet, View, Text, Image } from 'react-native';
import StarRating from './StarRating';

export default function ReviewCard({ body, author, rating }) {

    return (
        <View style={styles.inputContainer}>
            <View>
                <View>
                    <Image />
                    <Text>{author.username}</Text>
                </View>
                <StarRating rating={item.rating} display={true} />
                <Text style={styles.text}>{body}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

});
