import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function DayPicker({ }) {
    const [monday, setMonday] = useState(false)
    const [tuesday, setTuesday] = useState(false)
    const [wednesday, setWednesday] = useState(false)
    const [thursday, setThursday] = useState(false)
    const [friday, setFriday] = useState(false)
    const [saturday, setSaturday] = useState(false)
    const [sunday, setSunday] = useState(false)
    return (
        <View style={styles.container}>
            <Pressable>
                <View style={styles.selectedLetterContainer}>
                    <Text style={styles.selectedLetter}>M</Text>
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
        width: 35,
        height: 35,
        borderRadius: 50,
        marginBottom: 18,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    unselectedLetter: {
        color: '#000'
    },
    selectedLetterContainer: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginBottom: 18,
        marginHorizontal: 5,
        backgroundColor: '#A1CCE4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedLetter: {
        color: '#fff'
    },
});