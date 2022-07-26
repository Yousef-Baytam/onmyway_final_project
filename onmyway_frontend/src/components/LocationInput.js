import { StyleSheet, Text, View, TextInput } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import TargetIcon from '../assets/icons/TargetIcon';

export default function LocationInput({ text, color, action, value, setValue, placeholder, display }) {

    return (
        <View style={styles.inputContainer}>
            <View style={[styles.indicator, { backgroundColor: color ?? '#000' }]}></View>
            {!display ?
                <TextInput value={value} onChangeText={setValue} style={[styles.textContainerInput, { color: text != 'From' && text != 'To' ? '#000' : 'rgba(0,0,0,0.2)' }]} placeholder={placeholder} />
                :
                <Text style={[styles.textContainer, { color: text != 'From' && text != 'To' ? '#000' : 'rgba(0,0,0,0.2)' }]}>{text}</Text>
            }
            <Pressable onPress={action}>
                <TargetIcon />
            </Pressable>
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
    display: false
}