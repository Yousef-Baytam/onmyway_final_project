import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const ChatRoomCard = ({ data, action }) => {
    return (
        <Pressable style={styles.container} onPress={action}>
            <Image style={styles.image} source={data.user.hasOwnProperty('image') && Object.keys(data.user.image).length ? { uri: data.user.image } : require('../assets/blank-profile.webp')} />
            <Text>{data.user.usename}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 15
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        marginRight: 20
    }
});

export default ChatRoomCard