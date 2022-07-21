import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const NotificationList = ({ data }) => {
    console.log(data.data.joined)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={data.data.joined?.image ? { uri: data.data.joined.image.url } : require('../assets/blank-profile.webp')} />
            <Text>{data.data.joined.username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        marginRight: 10
    },
})

export default NotificationList