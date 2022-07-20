import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import moment from 'moment'

const ChatRoomCard = ({ data, action }) => {
    return (
        <Pressable style={styles.container} onPress={action}>
            <Image style={styles.image} source={data.user.image ? { uri: data.user.image } : require('../assets/blank-profile.webp')} />
            <View style={styles.userInfo}>
                <View>
                    <Text>{data.user.usename}</Text>
                    {
                        data.sender != data.userTag ?
                            !data.readStatus ?
                                <View>
                                    <Text>{data.numberOfMessages}</Text>
                                </View>
                                : null
                            : null
                    }
                </View>
                {
                    data.lastMessage.text ?
                        <View style={styles.mesasgeInfoWrapper}>
                            <Text numberOfLines={1} style={styles.message}>{data.lastMessage.text}</Text>
                            <Text numberOfLines={1} style={styles.message}>{
                                moment(data.lastMessage.createdAt).format('dddd') != moment().format('dddd') ?
                                    moment(data.lastMessage.createdAt).format('MMMM Do')
                                    :
                                    moment(data.lastMessage.createdAt).format('hh:mm a')
                            }</Text>
                        </View>
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
    },
    mesasgeInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    userInfo: {
        width: '80%'
    }
});

export default ChatRoomCard