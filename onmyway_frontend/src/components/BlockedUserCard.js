import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useTheme } from '../context/ThemeContext'

const BlockedUserCard = ({ data, action }) => {
    const { theme } = useTheme()

    return (
        <Pressable style={[styles.container, { backgroundColor: theme.bg }]} onPress={action}>
            <Image style={styles.image} source={data.user.image ? { uri: data.user.image } : require('../assets/blank-profile.webp')} />
            <View style={styles.userInfo}>
                <View style={styles.mesasgeInfoWrapper}>
                    <Text style={{ color: theme.text }}>{data.user.usename}</Text>
                </View>
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
    mesasgeInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    userInfo: {
        width: '80%'
    },
});

export default BlockedUserCard