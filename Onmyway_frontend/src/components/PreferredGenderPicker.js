import { StyleSheet, View, Text, TextInput } from 'react-native';
import RadioButtonList from './RadioButtonList'

export default function PreferredGenderPicker({ text, value, setValue, items, display }) {
    console.log(value)
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View style={styles.view}>
                {display ?
                    <Text>{`${ value[0].toUpperCase() }${ value.slice(1) }`}</Text>
                    : <RadioButtonList items={items} checked={value} setChecked={setValue} AuthInput={false} />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    view: {
        width: '50%',
        height: 73,
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

PreferredGenderPicker.defaultProps = {
    display: false
}