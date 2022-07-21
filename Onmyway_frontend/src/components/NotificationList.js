import { View, Text } from 'react-native'
import React from 'react'

const NotificationList = () => {
    return (
        <View style={styles.container}>
            <Text>NotificationList</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default NotificationList