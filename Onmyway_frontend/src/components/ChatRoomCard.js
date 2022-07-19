import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ChatRoomCard = ({ data }) => {
    console.log(data)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={data.hasOwnProperty('image') && Object.keys(data.image).length ? { uri: data.image.url } : require('../assets/blank-profile.webp')} />
            <Text>{data.username}</Text>
        </View>
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