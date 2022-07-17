import { StyleSheet, Text, View, TextInput } from 'react-native';
import ArrowHeadIcon from '../assets/icons/ArrowHeadIcon';

export default function FilterBar({ filter }) {

    return (
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                <Text>Filters</Text>
                <View style={styles.filtersContainer}>
                    <View style={styles.textConstainer}>
                        <Text style={{ color: '#92D293', fontWeight: 'bold' }}>From</Text>
                    </View>
                    <View style={styles.textConstainer}>
                        <Text style={{ color: '#D2686E', fontWeight: 'bold' }}>To</Text>
                    </View>
                    <View style={styles.icon}>
                        <ArrowHeadIcon up={true} />
                    </View>
                </View>
            </View>
            <View style={styles.dopPannel}>

            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    topBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    container: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
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
