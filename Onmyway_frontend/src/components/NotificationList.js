import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const NotificationList = ({ data }) => {
    console.log(data)
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <Image style={styles.image} source={data.user.image ? { uri: data.user.image } : require('../assets/blank-profile.webp')} /> */}
                <Text></Text>
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