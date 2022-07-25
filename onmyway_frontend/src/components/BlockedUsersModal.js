import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Modal, FlatList } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CancelIcon from '../assets/icons/CancelIcon';
import { useTheme } from '../context/ThemeContext';
import { getUsers } from '../controllers/userController';
import BlockedUserCard from './BlockedUserCard';

export default function BlockedUsersModal({ user, showBlockedUsers, setShowBlockedUsers }) {
    const { theme } = useTheme()
    const [blockedUsers, setBlockedUsers] = useState([])

    const handleBlcokedUsers = async () => {
        try {
            const res = await getUsers(user.blocked)
            setBlockedUsers(res)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        handleBlcokedUsers()
    }, [])

    return (
        <Modal
            animationType="slide"
            visible={showBlockedUsers}
            onRequestClose={() => {
                setBlockedUsers(!showBlockedUsers);
            }}>
            <View style={[styles.reviewContainer, { backgroundColor: theme.bg }]}>
                <Text style={[styles.text, { color: theme.text }]}>All Reviews</Text>
                <Pressable onPress={() => setShowBlockedUsers(false)} style={styles.cancel}>
                    <CancelIcon />
                </Pressable>
                {blockedUsers.length ? <FlatList
                    data={blockedUsers}
                    renderItem={({ item }) => (<>
                        <BlockedUserCard data={item} />
                    </>)}
                    style={{ width: '100%', marginLeft: 42 }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item._id}
                />
                    : <Text>No Blocked Users!</Text>
                }
            </View>
        </Modal >
    );
}

const styles = StyleSheet.create({
    reviewContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        width: '90%',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20
    },
    cancel: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1
    }
});