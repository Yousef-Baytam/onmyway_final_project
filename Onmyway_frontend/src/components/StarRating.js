import { Rating } from 'react-native-ratings';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useState } from 'react';

export default function StarRating({ }) {
    const onFinishRating = (e) => {
        console.log(e)
    }

    return (
        <View style={styles.container}>
            <Rating
                fractions={2}
                jumpValue={0.5}
                ratingColor='#A1CCE4'
                onFinishRating={onFinishRating}
                style={{ paddingVertical: 10 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        alignItems: 'flex-start',
        flexDirection: "row",
        justifyContent: 'center'
    },
});

