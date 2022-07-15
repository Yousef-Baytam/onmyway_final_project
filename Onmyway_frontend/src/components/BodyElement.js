import { StyleSheet, View, Text, TextInput } from 'react-native';
import PhoneCustomInput from './PhoneCustomInput';
import RadioButtonList from './RadioButtonList';

export default function BodyElement({ keyWord, value, editMode, editType, keyboard, setValue }) {

    return (
        <View style={styles.container}>
            <View style={styles.keyStyle}>
                <Text>{keyWord}</Text>
            </View>
            <View style={styles.valueStyle}>
                {
                    editMode ?
                        editType == 'input' ?
                            <TextInput style={styles.input}
                                value={value}
                                onChangeText={setValue}
                                keyboardType={keyboard} />
                            : editType == 'phone' ?
                                <PhoneCustomInput phone={value} setPhone={setValue} custom={{
                                    width: '100%',
                                    borderBottomWidth: 0,
                                    borderColor: 'rgba(0,0,0, 0.7)',
                                    paddingBottom: 0,
                                    marginBottom: 0,
                                    marginTop: 0,
                                    paddingLeft: 0
                                }} />
                                : editType == 'gender' ?
                                    <RadioButtonList checked={value} setChecked={setValue} custom={{
                                        width: '100%',
                                        borderBottomWidth: 0,
                                        borderColor: 'rgba(0,0,0, 0.7)',
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                        flexDirection: "row",
                                        alignItems: 'center',
                                    }} AuthInput={false} />
                                    : null
                        : <Text>{value}</Text>
                }

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    keyStyle: {
        width: '35%',
        paddingLeft: 10
    },
    valueStyle: {
        width: '65%',
        paddingLeft: 10
    },
    input: {
        height: 20
    }
});

BodyElement.defaultProps = {
    keyboard: 'default'
}

