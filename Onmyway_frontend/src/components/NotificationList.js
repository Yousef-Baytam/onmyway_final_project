import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const NotificationList = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>NotificationList</Text>
            </View>
        </ScrollView>
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