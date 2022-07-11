import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function DayPicker({ setDays }) {
    const [monday, setMonday] = useState(false)
    const [tuesday, setTuesday] = useState(false)
    const [wednesday, setWednesday] = useState(false)
    const [thursday, setThursday] = useState(false)
    const [friday, setFriday] = useState(false)
    const [saturday, setSaturday] = useState(false)
    const [sunday, setSunday] = useState(false)

    const handleSetDays = () => {

    }

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