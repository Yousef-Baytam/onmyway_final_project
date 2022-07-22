import moment from 'moment';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, LayoutAnimation } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ArrowHeadIcon from '../assets/icons/ArrowHeadIcon';
import CustomButton from './CustomButton';
import DatePicker from './DatePicker';
import LocationInput from './LocationInput';
import CancelIcon from '../assets/icons/CancelIcon'

export default function FilterBar({ setFilter, posts, filter }) {
    const [dateFilter, setDateFilter] = useState(new Date())
    const [showFIlterDropDown, setShowFIlterDropDown] = useState(false)


    const handleFilter = () => {
        if (posts && dateFilter != moment()) {
            setFilter(posts.filter((i) => !i.repeat && moment(i.date).format('DD MM YYYY') == moment(dateFilter).format('DD MM YYYY')))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                {
                    filter ?
                        <Pressable onPress={() => setFilter(null)}>
                            <CancelIcon />
                        </Pressable>
                        :
                        <Text>Filters</Text>
                }
                <Pressable style={styles.filtersContainer} onPress={() => {
                    LayoutAnimation.configureNext(
                        LayoutAnimation.create(150, 'easeInEaseOut', 'opacity')
                    )
                    setShowFIlterDropDown(!showFIlterDropDown)
                }}>
                    <View style={styles.textConstainer}>
                        <Text style={{ color: '#92D293', fontWeight: 'bold' }}>From</Text>
                    </View>
                    <View style={styles.textConstainer}>
                        <Text style={{ color: '#D2686E', fontWeight: 'bold' }}>To</Text>
                    </View>
                    <View style={styles.icon}>
                        <ArrowHeadIcon up={showFIlterDropDown ? true : false} />
                    </View>
                </Pressable>
            </View>
            <View style={[styles.dropPannel, { maxHeight: showFIlterDropDown ? '100%' : 0 }]}>
                <View style={styles.topBarContainer}>
                    <Text>Date   </Text>
                    <View style={[styles.filtersContainer, { height: 38, marginBottom: 0, paddingLeft: 0 }]}>
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
                        <CustomButton text={'Apply'} custom={{ width: '100%', transform: [{ scale: 2 }] }} action={handleFilter} />
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
        overflow: 'hidden',
        transform: [{ scaleY: 1 }],
    },
    view1: {
        width: '115%',
        height: 70,
        transform: [{ scale: 0.7 }],
        flexDirection: 'row',
        alignItems: 'center',
    },
});
