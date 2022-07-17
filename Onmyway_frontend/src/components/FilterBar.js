import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ArrowHeadIcon from '../assets/icons/ArrowHeadIcon';
import CustomButton from './CustomButton';
import DatePicker from './DatePicker';
import LocationInput from './LocationInput';

export default function FilterBar({ filter }) {
    const [dateFilter, setDateFilter] = useState(new Date())

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
                <View style={styles.topBarContainer}>
                    <Text>Date</Text>
                    <View style={styles.filtersContainer}>
                        <DatePicker date={dateFilter} setDate={setDateFilter} placeholder={'Ride Date'} custom={{
                            width: '100%',
                            borderColor: 'rgba(0,0,0, 0.7)',
                            marginBottom: 0,
                            marginTop: 0,
                            paddingLeft: 0,
                            paddingBottom: 0
                        }} AuthInput={false} />
                    </View>
                </View>
                <View style={styles.view1}>
                    <View>
                        <LocationInput text={'From'} color={'#92D293'} />
                        <LocationInput text={'To'} color={'#D2686E'} />
                    </View>
                    <View>
                        <CustomButton text={'Apply'} custom={{ width: '100%', transform: [{ scale: 2 }] }} />
                    </View>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    topBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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
        width: '115%',
        height: 80,
        transform: [{ scale: 0.7 }],
        flexDirection: 'row',
        alignItems: 'center',
    }
});
