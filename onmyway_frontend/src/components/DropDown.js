import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


export default function DropDown({ value, items, setValue, setItems }) {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                style={styles.input}
                mode="SIMPLE"
            />
        </View >
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '85%',
        alignItems: 'flex-start',
        flexDirection: "row",
        justifyContent: 'center'
    },
    input: {
        width: '95%',
        borderBottomWidth: 0.2,
        borderColor: 'rgba(0,0,0, 0.7)',
        paddingBottom: 10,
        marginBottom: 25,
        paddingLeft: 10
    }
});