import moment from 'moment';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, LayoutAnimation } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ArrowHeadIcon from '../assets/icons/ArrowHeadIcon';
import CustomButton from './CustomButton';
import DatePicker from './DatePicker';
import LocationInput from './LocationInput';
import CancelIcon from '../assets/icons/CancelIcon'
import { useTheme } from '../context/ThemeContext';

export default function FilterBar({ setFilter, posts, filter }) {
    const { theme } = useTheme()
    const [dateFilter, setDateFilter] = useState(new Date())
    const [from, setFrom] = useState({ location: '' })
    const [to, setTo] = useState({ location: '' })
    const [showFIlterDropDown, setShowFIlterDropDown] = useState(false)


    const handleFilter = () => {
        let arr = posts
        if (posts && dateFilter != moment())
            arr = arr.filter((i) => (!i.repeat && moment(i.date).format('DD MM YYYY') == moment(dateFilter).format('DD MM YYYY'))
                || (i.repeat && JSON.parse(i.days)[`${ moment(dateFilter).format('dddd').toLowerCase() }`]))
        if (posts && from.location.length)
            arr = arr.filter((e) => e?.from?.location?.toLowerCase().includes(from?.location.toLowerCase()))
        if (posts && to.location.length)
            arr = arr.filter((e) => e?.to?.location?.toLowerCase().includes(to?.location.toLowerCase()))
        setFilter(arr)
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
                        <Text style={{ color: theme.text }}>Filters</Text>
                }
                <Pressable style={styles.filtersContainer} onPress={() => {
                    LayoutAnimation.configureNext(
                        LayoutAnimation.create(150, 'easeInEaseOut', 'opacity')
                    )
                    setShowFIlterDropDown(!showFIlterDropDown)
                }}>
                    <View style={styles.textConstainer}>
                        <Text style={{ color: '#92D293', fontWeight: 'bold' }}>{from.location.length ? from.location : 'From'}</Text>
                    </View>
                    <View style={styles.textConstainer}>
                        <Text style={{ color: '#D2686E', fontWeight: 'bold' }}>{to.location.length ? to.location : 'To'}</Text>
                    </View>
                    <View style={styles.icon}>
                        <ArrowHeadIcon up={showFIlterDropDown ? true : false} />
                    </View>
                </Pressable>
            </View>
            <View style={[styles.dropPannel, { maxHeight: showFIlterDropDown ? '100%' : 0, backgroundColor: theme.bg }]}>
                <View style={[styles.topBarContainer, { backgroundColor: theme.bg }]}>
                    <Text style={{ color: theme.text }}>Date   </Text>
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
                <View style={[styles.view1, { backgroundColor: theme.bg }]}>
                    <View>
                        <LocationInput text={'From'} color={'#92D293'} value={from} setValue={setFrom} noMap={true} />
                        <LocationInput text={'To'} color={'#D2686E'} value={to} setValue={setTo} noMap={true} />
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
        marginLeft: 10,
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
