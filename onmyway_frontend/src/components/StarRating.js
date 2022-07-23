import { Rating } from 'react-native-ratings';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function StarRating({ rating, display, setRating, review, custom }) {
    const { theme } = useTheme()
    const onFinishRating = (e) => {
        setRating(e)
    }

    return (
        <View style={[styles.container, custom]}>
            {display ? <Rating
                type='custom'
                startingValue={rating}
                ratingColor='#A1CCE4'
                tintColor={review ? '#EAEAEA' : theme.bg}
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
    rating: 2.5,
    review: false,
    custom: {}
}

