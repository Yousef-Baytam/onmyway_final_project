import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useTheme } from '../context/ThemeContext'
import CustomButton from './CustomButton'
import { unblockUser } from '../controllers/userController'

const BlockedUserCard = ({ data, action }) => {
    const { theme } = useTheme()

    const handleUnblockUser = async () => {
        const res = await unblockUser(data._id)
    }

    const editConfirmationAlert = () => {
        return Alert.alert('Confirm Action', 'Are you sure you want to unblock this user?',
            [
                {
                    text: 'No',
                },
                {
                    text: 'Yes',
                    onPress: handleUnblockUser
                }
            ])
    }

    return (
        <Pressable style={[styles.container, { backgroundColor: theme.bg }]} onPress={action}>
            <View style={[styles.subContainer, { backgroundColor: theme.bg }]}>
                <Image style={styles.image} source={data?.image ? data.image?.url ? { uri: data.image.url } : require('../assets/blank-profile.webp') : require('../assets/blank-profile.webp')} />
                <View style={styles.userInfo}>
                    <View style={styles.mesasgeInfoWrapper}>
                        <Text style={{ color: theme.text }} numberOfLines={1}>{data.username}</Text>
                    </View>
                </View>
            </View>
            <CustomButton text={'Unblock'} custom={{ width: '30%' }} action={editConfirmationAlert} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 10
    },
    subContainer: {
        width: '60%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
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