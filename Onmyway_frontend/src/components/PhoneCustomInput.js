import { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import PhoneInput from 'react-native-phone-input'


export default function PhoneCustomInput({ setPhone, phone, custom }) {

    const phoneInput = useRef()

    return (
        <View style={styles.inputContainer}>
            <PhoneInput
                ref={phoneInput}
                value={phone}
                initialValue="+961"
                onChangePhoneNumber={setPhone}
                style={[styles.input, custom]}
                autoFormat={true}
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
        marginTop: 8,
        paddingLeft: 10
    }
});

PhoneCustomInput.defaultProps = {
    custom: {}
}