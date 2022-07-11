import { StyleSheet, View } from 'react-native';
import RepeatIcon from '../assets/icons/RepeatIcon';
import Checkbox from 'expo-checkbox';

export default function DateInput({ repeat, setRepeat }) {
    return (
        <View style={styles.container}>
            <RepeatIcon />
            <Checkbox value={repeat} onValueChange={setRepeat} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '60%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});