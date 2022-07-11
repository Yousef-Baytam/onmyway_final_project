import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function DayPicker({ }) {
    return (
        <View style={styles.container}>
            <Pressable>
                <View style={styles.letterContainer}>
                    <Text>M</Text>
                </View>
            </Pressable>
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
    },
    unselectedLetterContainer: {
        width: 20,
        height: 20,
        borderRadius: 50,
        marginBottom: 18,
        marginHorizontal: 5,
    },
    unselectedLetter: {
        color: '#000'
    }
});