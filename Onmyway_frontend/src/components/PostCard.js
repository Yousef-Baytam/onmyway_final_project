import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import CalendarsTickIcon from '../assets/icons/CalendarsTickIcon';
import PingIcon from '../assets/icons/PingIcon';
import moment from 'moment'

export default function PostCard(data) {
    const [date, setDate] = useState('')
    const [days, setDays] = useState('')

    const handleDate = () => {
        const next7Days = [moment().format('dddd').toLowerCase(),
        moment().add(1, 'days').format('dddd').toLowerCase(),
        moment().add(2, 'days').format('dddd').toLowerCase(),
        moment().add(3, 'days').format('dddd').toLowerCase(),
        moment().add(4, 'days').format('dddd').toLowerCase(),
        moment().add(5, 'days').format('dddd').toLowerCase(),
        moment().add(6, 'days').format('dddd').toLowerCase()]
        if (data.data.repeat) {
            setDays(JSON.parse(data.data.days))
            const temp = JSON.parse(data.data.days)
            const trueDays = Object.keys(temp).filter((i) => temp[i])
            if (trueDays.includes(next7Days[0]))
                setDate('Today')
            else if (trueDays.includes(next7Days[1]))
                setDate('Tomorrow')
            else {
                for (let i = 2; i < next7Days.length; i++) {
                    if (trueDays.includes(next7Days[i])) {
                        setDate(next7Days[i])
                        break
                    }
                }
            }

        }
        else { }
    }

    useEffect(() => {
        handleDate()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={{ width: '33.333%' }}>
                    {/* data.owner.image ? { uri: data.owner.image } : */}
                    <Image source={require('../assets/blank-profile.webp')} style={styles.image} />
                </View>
                <View style={styles.infoConatiner}>
                    <View style={[styles.halfInfoContainer, { borderRightWidth: 1, borderRightColor: '#EAEAEA' }]}>
                        <View>
                            <View style={[styles.sideBar, { backgroundColor: '#92D293' }]}></View>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.text}>
                                <Text numberOfLines={1}>Jbeil</Text>
                                <View style={{ marginHorizontal: 5 }}>
                                    <PingIcon />
                                </View>
                            </View>
                            <View style={styles.text}>
                                <Text>{date}</Text>
                                <View style={{ marginHorizontal: 5 }}>
                                    <CalendarsTickIcon />
                                </View>
                            </View>
                            <View style={styles.text}>
                                <Text>{data.data.departureTime}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.halfInfoContainer}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.text}>
                                <View style={{ marginHorizontal: 5 }}>
                                    <PingIcon />
                                </View>
                                <Text numberOfLines={1}>Beirut</Text>
                            </View>
                            <View style={styles.text}>
                                <View style={{ marginHorizontal: 5 }}>
                                    <CalendarsTickIcon />
                                </View>
                                <Text>Date</Text>
                            </View>
                            <View style={styles.text}>
                                <Text>Time</Text>
                            </View>
                        </View>
                        <View>
                            <View style={[styles.sideBar, { backgroundColor: '#D2686E' }]}></View>
                        </View>
                    </View>
                </View>
            </View>
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
        width: '62.333%',
        backgroundColor: '#fff',
        marginLeft: 10,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    image: {
        borderRadius: 10,
        marginLeft: 5,
        width: '100%',
        height: 110
    },
    halfInfoContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sideBar: {
        height: '100%',
        backgroundColor: '#000',
        width: 8,
    },
    text: {
        flexDirection: 'row',
        height: '33%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});