import { StyleSheet, View, Text } from 'react-native';

export default function ReviewCard({ items, checked, setChecked, AuthInput, custom }) {

    return (
        <View style={styles.inputContainer}>
            <StarRating />
            <Text style={styles.text}></Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
