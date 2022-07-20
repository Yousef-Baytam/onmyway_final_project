import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

const ChatRoomCard = ({ data, action }) => {
    console.log(data)
    return (
        <Pressable style={styles.container} onPress={action}>
            <Image style={styles.image} source={data.user.image ? { uri: data.user.image } : require('../assets/blank-profile.webp')} />
            <View>
                <Text>{data.user.usename}</Text>
                {
                    data.lastMessage.text ?
                        <Text numberOfLines={1} style={styles.message}>{data.lastMessage.text}</Text>
                        : null
                }
            </View>
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
    },
    message: {
        color: '#858585',
    }
});

export default ChatRoomCard