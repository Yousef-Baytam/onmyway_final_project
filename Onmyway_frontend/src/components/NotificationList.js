import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import TickIcon from '../assets/icons/TickIcon'
import CancelIcon from '../assets/icons/CancelIcon'
import MessagesIcon from '../assets/icons/MessagesIcon'

const NotificationList = ({ data }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={data.data.joined?.image ? { uri: data.data.joined.image.url } : require('../assets/blank-profile.webp')} />
            <Text>{data.data.joined.username}</Text>
            <MessagesIcon color={'#A1CCE4'} customDim={{ width: 38, height: 38 }} />
            <CancelIcon />
            <TickIcon />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 10
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        marginRight: 10
    },
})

export default NotificationList