import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CalendarsTickIcon from '../assets/icons/CalendarsTickIcon';
import PingIcon from '../assets/icons/PingIcon';
import moment from 'moment'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

export default function PostCard(data) {
    const { user } = useUser()
    const [date, setDate] = useState('')
    const navigation = useNavigation()
    const { theme } = useTheme()

    const handleDate = () => {
        const next7Days = [moment().format('dddd'),
        moment().add(1, 'days').format('dddd'),
        moment().add(2, 'days').format('dddd'),
        moment().add(3, 'days').format('dddd'),
        moment().add(4, 'days').format('dddd'),
        moment().add(5, 'days').format('dddd'),
        moment().add(6, 'days').format('dddd')]
        if (data.data.repeat) {
            const temp = JSON.parse(data.data.days)
            const trueDays = Object.keys(temp).filter((i) => temp[i])
            if (trueDays.includes(next7Days[0].toLowerCase()))
                setDate('Today')
            else if (trueDays.includes(next7Days[1].toLowerCase()))
                setDate('Tomorrow')
            else {
                for (let i = 2; i < next7Days.length; i++) {
                    if (trueDays.includes(next7Days[i].toLowerCase())) {
                        setDate(next7Days[i])
                        break
                    }
                }
            }

        }
        else {
            moment(data.data.date) == moment() ? setDate('Today') :
                moment(data.data.date) == moment().add(1, 'days') ? setDate('Tomorrow') : setDate(moment(data.data.date).format('MMMM Do'))
        }
    }

    useEffect(() => {
        handleDate()
    }, [])

    return (
        <View style={styles.container}>
            <Pressable onPress={() => { data.notPressable ? null : navigation.navigate('Post', data.data) }} >
                <View style={[styles.cardContainer, { backgroundColor: theme.postCard }]}>
                    <View style={styles.infoConatiner}>
                        <View style={[styles.halfInfoContainer, { backgroundColor: theme.postCardInfo }]}>
                            <View>
                                <View style={[styles.sideBar, { backgroundColor: theme.bg == '#fff' ? '#92D293' : '#2F8130' }]}></View>
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={styles.text}>
                                    <Text numberOfLines={1} style={{ color: theme.text }}>{data.data?.from?.location}</Text>
                                    <View style={{ marginHorizontal: 5 }}>
                                        <PingIcon color={theme.bg == '#fff' ? '#005A9C' : '#A1CCE4'} />
                                    </View>
                                </View>
                                <View style={styles.text}>
                                    <Text style={{ color: theme.text }}>{date}</Text>
                                    <View style={{ marginHorizontal: 5 }}>
                                        <CalendarsTickIcon color={theme.bg == '#fff' ? '#005A9C' : '#A1CCE4'} />
                                    </View>
                                </View>
                                <View style={styles.text}>
                                    <Text style={{ color: theme.text }}>{data.data.departureTime}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.imageContainer, { backgroundColor: theme.postCardInfo }]}>
                            <Image source={data.data.owner.hasOwnProperty('image') && Object.keys(data.data.owner.image).length ? { uri: data.data.owner.image.url } : require('../assets/blank-profile.webp')}
                                style={styles.image} />
                            <Text numberOfLines={1} style={{ color: theme.text }}>{data.data.owner.username}</Text>
                        </View>
                        <View style={[styles.halfInfoContainer, { backgroundColor: theme.postCardInfo }]}>
                            <View style={{ flex: 1 }}>
                                <View style={styles.text}>
                                    <View style={{ marginHorizontal: 5 }}>
                                        <PingIcon color={theme.bg == '#fff' ? '#005A9C' : '#A1CCE4'} />
                                    </View>
                                    <Text numberOfLines={1} style={{ color: theme.text }}>{data.data?.to?.location}</Text>
                                </View>
                                {data.data.returnTime != 'Invalid date' ?
                                    <View style={styles.text}>
                                        <View style={{ marginHorizontal: 5 }}>
                                            <CalendarsTickIcon color={theme.bg == '#fff' ? '#005A9C' : '#A1CCE4'} />
                                        </View>
                                        <Text style={{ color: theme.text }}>{date}</Text>
                                    </View>
                                    : <View style={styles.text}>
                                        <Text style={{ color: theme.text }}>—</Text>
                                    </View>}
                                <View style={styles.text}>
                                    {data.data.returnTime != 'Invalid date' ? <Text style={{ color: theme.text }}>{data.data.returnTime}</Text> : <Text style={{ color: theme.text }}>—</Text>}
                                </View>
                            </View>
                            <View>
                                <View style={[styles.sideBar, { backgroundColor: theme.bg == '#fff' ? '#D2686E' : '#97262C' }]}></View>
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 120,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 5
    },
    cardContainer: {
        width: '100%',
        height: 120,
        backgroundColor: '#EAEAEA',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
    },
    infoConatiner: {
        height: 110,
        width: '96%',
        backgroundColor: '#fff',
        marginHorizontal: 5,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    image: {
        width: 70,
        borderRadius: 35,
        height: 70
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    halfInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sideBar: {
        height: '100%',
        backgroundColor: '#000',
        width: 4,
    },
    text: {
        flexDirection: 'row',
        height: '33%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

PostCard.defaultProps = {
    notPressable: false
}