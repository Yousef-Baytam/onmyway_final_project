import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from '../../../firebase'
import { useUser } from '../../context/UserContext';
import { getUsers } from '../../controllers/userController';
import ChatRoomCard from '../../components/ChatRoomCard';

export default function AllChats({ navigation }) {
    const { user } = useUser()

    const [chatThreads, setChatThreads] = useState([])
    const [threadsUsersIds, setThreadsUsersIds] = useState([])
    const [threadsUsers, setThreadsUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const q = query(collection(db, "chatRooms"), where('userLocalDbIds', 'array-contains', user._id))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const chatRooms = []
            querySnapshot.forEach((doc) => {
                chatRooms.push({ ...doc.data(), id: doc.id })
            })
            setChatThreads(chatRooms)
            let users = chatRooms.map((e) => e.userLocalDbIds.filter((i) => i != user._id)[0])
            users != threadsUsersIds &&
                setThreadsUsersIds(users)

            if (loading) {
                setLoading(false);
            }
        })
        return () => unsubscribe()
    }, [])

    useEffect(() => {
        const allUsers = async () => {
            const users = await getUsers(threadsUsersIds)
            setThreadsUsers(users)
        }
        threadsUsersIds.length != 0 && allUsers()
    }, [threadsUsersIds])

    return (<>
        {loading ?
            <ActivityIndicator color={'#005A9C'} size={'large'} />
            :
            <View style={styles.container}>
                {
                    threadsUsers.length &&
                    <FlatList
                        data={threadsUsers}
                        renderItem={({ item }) => (<ChatRoomCard data={item} />)}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => item._id}
                        style={{ width: '100%' }}
                    />
                }
            </View >
        }
    </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});