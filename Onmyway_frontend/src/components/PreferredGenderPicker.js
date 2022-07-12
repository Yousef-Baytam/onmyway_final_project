import { StyleSheet, View, Text, TextInput } from 'react-native';
import RadioButtonList from './RadioButtonList'

export default function PreferredGenderPicker({ text, value, setValue, items }) {

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View style={styles.view}>
                <RadioButtonList items={items} checked={value} setChecked={setValue} AuthInput={false} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    view: {
        marginTop: 20,
        height: 80,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0.2,
        paddingVertical: 25,
        borderColor: 'rgba(0,0,0, 0.7)',
    },
    text: {
        paddingBottom: 5,
    }
});