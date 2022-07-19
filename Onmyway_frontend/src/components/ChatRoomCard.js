import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ChatRoomCard = () => {
    return (
        <View style={styles.container}>
            <Text>ChatRoomCard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ChatRoomCard