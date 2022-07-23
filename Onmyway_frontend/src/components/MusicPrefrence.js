import { StyleSheet, View, Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function MusicPrefrence({ text, value, setValue }) {
    const { theme } = useTheme()

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={[styles.text, { color: theme.text }]}>{text}</Text>
            </View>
            <View style={styles.view}>
                <Text style={[styles.text, { color: theme.text }]}>{value}</Text>
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
        height: 80,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        borderColor: 'rgba(0,0,0, 0.7)',
    },
    text: {
        paddingBottom: 5,
    }
});