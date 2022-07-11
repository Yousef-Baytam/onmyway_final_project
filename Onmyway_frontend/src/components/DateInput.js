import { StyleSheet, View } from 'react-native';
import RepeatIcon from '../assets/icons/RepeatIcon';

export default function DateInput({ }) {
    return (
        <View style={styles.container}>
            <RepeatIcon />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 45,
        alignItems: 'center',
        marginLeft: 20
    }
});