import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const NotificationList = ({ data }) => {
    console.log(data.pendingRequests)
    return (
        <>
            {
                data.pendingRequests.map((e) => (
                    <View style={styles.container} key={e._id}>
                        <Image style={styles.image} source={e.joined?.image ? { uri: e.joined.image.url } : require('../assets/blank-profile.webp')} />
                        <Text>{e.joined.username}</Text>
                    </View>
                ))
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default NotificationList