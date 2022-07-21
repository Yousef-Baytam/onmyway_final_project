import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import TickIcon from '../assets/icons/TickIcon'
import CancelIcon from '../assets/icons/CancelIcon'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { updateJoinRequestStatus } from '../controllers/postsController'

const NotificationList = ({ data, action }) => {
    const handleDecline = async () => {
        try {
            await updateJoinRequestStatus(data.id, data.data.joined._id, 'declined')
            action()
        } catch (e) {
            alert('Error updateing the status request, try again later')
        }
    }

    const handleAccept = async () => {
        try {
            await updateJoinRequestStatus(data.id, data.data.joined._id, 'approved')
            action()
        } catch (e) {
            alert('Error updateing the status request, try again later')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Image style={styles.image} source={data.data.joined?.image ? { uri: data.data.joined.image.url } : require('../assets/blank-profile.webp')} />
                <Text numberOfLines={1}>{data.data.joined.username}</Text>
            </View>
            <View style={styles.section}>
                <Pressable style={styles.iconContainer} onPress={handleDecline}>
                    <CancelIcon />
                </Pressable>
                <Pressable style={styles.iconContainer} onPress={handleAccept}>
                    <TickIcon />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        marginRight: 10
    },
    iconContainer: {
        paddingHorizontal: 5
    }
})

export default NotificationList