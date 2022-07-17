import { StyleSheet, Text, View, TextInput } from 'react-native';
import ArrowHeadIcon from '../assets/icons/ArrowHeadIcon';

export default function FilterBar({ filter }) {

    return (
        <View style={styles.container}>
            <Text>Filters</Text>
            <View style={styles.filtersContainer}>
                <View style={styles.textConstainer}>
                    <Text>From</Text>
                </View>
                <View style={styles.textConstainer}>
                    <Text>To</Text>
                </View>
                <View style={styles.icon}>
                    <ArrowHeadIcon up={false} />
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center'
    },
    filtersContainer: {
        width: '75%',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: '#EAEAEA',
        borderRadius: 10
    },
    textConstainer: {
        width: '45%'
    },
    icon: {
        marginLeft: 10
    }
});
