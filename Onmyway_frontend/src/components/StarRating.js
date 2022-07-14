import { Rating } from 'react-native-ratings';
import { StyleSheet, View } from 'react-native';

export default function StarRating({ rating, display }) {
    const onFinishRating = (e) => {
        console.log(e)
    }

    return (
        <View style={styles.container}>
            {display ? <Rating
                type='custom'
                startingValue={rating}
                ratingColor='#A1CCE4'
                tintColor='#fff'
                ratingBackgroundColor='#EAEAEA'
                readonly={true}
                imageSize={25}
                style={styles.stars}
            />
                : <Rating
                    fractions={2}
                    jumpValue={0.5}
                    type='custom'
                    startingValue={rating}
                    ratingColor='#A1CCE4'
                    tintColor='#fff'
                    ratingBackgroundColor='#EAEAEA'
                    imageSize={25}
                    onFinishRating={onFinishRating}
                    style={styles.stars}
                />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'flex-start',
        flexDirection: "row",
        justifyContent: 'center'
    },
    stars: {
        paddingVertical: 10
    }
});

StarRating.defaultProps = {
    display: false,
    rating: 3.5
}

