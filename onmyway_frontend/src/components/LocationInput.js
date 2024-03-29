import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import TargetIcon from '../assets/icons/TargetIcon';
import { useTheme } from '../context/ThemeContext';
import Map from './Map'

export default function LocationInput({ text, color, value, setValue, placeholder, display, noMap }) {
    const [showMapModal, setShowMapModal] = useState(false)
    const { theme } = useTheme()

    return (
        <View style={styles.inputContainer}>
            <View style={[styles.indicator, { backgroundColor: color ?? '#000' }]}></View>
            {!display ?
                <TextInput value={value.location} onChangeText={(e) => { setValue({ ...value, location: e }) }} style={[styles.textContainerInput, { color: value != 'From' && value != 'To' ? theme.text : 'rgba(0,0,0,0.2)', backgroundColor: theme.postCard }]} placeholder={placeholder} />
                :
                <Text style={[styles.textContainer, { color: text != 'From' && text != 'To' ? theme.text : 'rgba(0,0,0,0.2)', backgroundColor: theme.postCard }]}>{value.location}</Text>
            }
            <Pressable onPress={() => setShowMapModal(true)}>
                <TargetIcon color={value?.geometry?.coordinates ? '#005A9C' : '#A1CCE4'} />
            </Pressable>
            {
                !noMap &&
                <Map showMapModal={showMapModal} setShowMapModal={setShowMapModal} value={value} setValue={setValue} display={display} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 5
    },
    indicator: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 15,
    },
    textContainer: {
        width: '100%',
        padding: 5,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: '#EAEAEA',
    },
    textContainerInput: {
        width: '100%',
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: '#EAEAEA',
    }
});

LocationInput.defaultProps = {
    display: false,
    noMap: false
}