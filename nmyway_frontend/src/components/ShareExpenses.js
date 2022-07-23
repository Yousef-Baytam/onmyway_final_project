import Checkbox from 'expo-checkbox';
import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function ShareExpenses({ text, value, setValue, display }) {
    const { theme } = useTheme()
    return (
        <View style={styles.container}>
            <View style={[styles.view, { borderColor: theme.outline }]}>
                <Text style={[styles.text, { color: theme.text }]}>{text}</Text>
            </View>
            <View style={[styles.view, { borderColor: theme.outline }]}>
                {
                    display ?
                        <Checkbox value={value} disabled={true} color={'#A1CCE4'} style={{ marginHorizontal: 18, width: 15, height: 15 }} />
                        : <Checkbox value={value} onValueChange={setValue} color={'#A1CCE4'} style={{ marginHorizontal: 18, width: 15, height: 15 }} />
                }
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
        height: 73,
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

ShareExpenses.defaultProps = {
    display: false
}