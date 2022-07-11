import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function DayPicker({ setDays, days }) {
    const [monday, setMonday] = useState(days.monday)
    const [tuesday, setTuesday] = useState(days.tuesdayy)
    const [wednesday, setWednesday] = useState(days.wednesday)
    const [thursday, setThursday] = useState(days.thursday)
    const [friday, setFriday] = useState(days.friday)
    const [saturday, setSaturday] = useState(days.saturday)
    const [sunday, setSunday] = useState(days.sunday)

    const handleSetDays = () => {
        setDays({ monday: monday, tuesday: tuesday, wednesday: wednesday, thursday: thursday, friday: friday, saturday: saturday, sunday: sunday })
    }

    useEffect(() => {
        handleSetDays()
    }, [monday, tuesday, wednesday, thursday, friday, saturday, sunday])

    return (
        <View style={styles.container}>
            <Pressable onPress={() => { setMonday(!monday) }}>
                <View style={monday ? styles.selectedLetterContainer : styles.unselectedLetterContainer}>
                    <Text style={monday ? styles.selectedLetter : styles.unselectedLetter}>M</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { setTuesday(!tuesday) }}>
                <View style={tuesday ? styles.selectedLetterContainer : styles.unselectedLetterContainer}>
                    <Text style={tuesday ? styles.selectedLetter : styles.unselectedLetter}>T</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { setWednesday(!wednesday) }}>
                <View style={wednesday ? styles.selectedLetterContainer : styles.unselectedLetterContainer}>
                    <Text style={wednesday ? styles.selectedLetter : styles.unselectedLetter}>W</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { setThursday(!thursday) }}>
                <View style={thursday ? styles.selectedLetterContainer : styles.unselectedLetterContainer}>
                    <Text style={thursday ? styles.selectedLetter : styles.unselectedLetter}>T</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { setFriday(!friday) }}>
                <View style={friday ? styles.selectedLetterContainer : styles.unselectedLetterContainer}>
                    <Text style={friday ? styles.selectedLetter : styles.unselectedLetter}>F</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { setSaturday(!saturday) }}>
                <View style={saturday ? styles.selectedLetterContainer : styles.unselectedLetterContainer}>
                    <Text style={saturday ? styles.selectedLetter : styles.unselectedLetter}>S</Text>
                </View>
            </Pressable>
            <Pressable onPress={() => { setSunday(!sunday) }}>
                <View style={sunday ? styles.selectedLetterContainer : styles.unselectedLetterContainer}>
                    <Text style={sunday ? styles.selectedLetter : styles.unselectedLetter}>S</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    unselectedLetterContainer: {
        width: 35,
        height: 35,
        marginBottom: 20,
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    unselectedLetter: {
        color: '#000',
    },
    selectedLetterContainer: {
        width: 35,
        height: 35,
        marginBottom: 20,
        marginHorizontal: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedLetter: {
        color: '#fff',
        borderRadius: 50,
        backgroundColor: '#A1CCE4',
        padding: 5,
        width: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
});