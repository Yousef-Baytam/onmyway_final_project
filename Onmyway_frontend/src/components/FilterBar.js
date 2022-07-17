import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function FilterBar({ filter }) {

    return (
        <View style={styles.container}>
            <Text>Filters</Text>
            <View style={styles.filtersContainer}>
                <View>
                    <Text>From</Text>
                </View>
                <View>
                    <Text>To</Text>
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
        width: '75%'
    }
});
