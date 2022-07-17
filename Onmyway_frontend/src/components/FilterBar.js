import { StyleSheet, Text, View, TextInput } from 'react-native';
import ArrowHeadIcon from '../assets/icons/ArrowHeadIcon';
import LocationInput from './LocationInput';

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
            <View style={styles.dropPannel}>
                <View style={styles.view1}>
                    <LocationInput text={'From'} color={'#92D293'} />
                    <LocationInput text={'To'} color={'#D2686E'} />
                </View>
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
    },
    dropPannel: {
        width: '100%',
        position: 'absolute',
        top: '100%',
        zIndex: 1,
        backgroundColor: '#fff',
    },
    view1: {
        width: '100%',
        height: 100,
        transform: [{ scale: 0.7 }]
    }
});
