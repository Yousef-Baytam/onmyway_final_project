import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native';
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
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
        const q = query(collection(db, "chatRooms"), where('userLocalDbIds', 'array-contains', user._id), orderBy('latestMessage.createdAt', "desc"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const chatRooms = []
            querySnapshot.forEach((doc) => {
                chatRooms.push({ ...doc.data(), id: doc.id })
            })
            // setChatThreads(chatRooms)
            setThreadsUsers(chatRooms.map((e) => { return { id: e.id, user: e.users1.userId == user._id ? e.users2 : e.users1 } }))
            // let users = chatRooms.map((e) => e.userLocalDbIds.filter((i) => i != user._id)[0])
            // users != threadsUsersIds &&
            //     setThreadsUsersIds(users)

            if (loading) {
                setLoading(false);
            }
        })
        return () => unsubscribe()
    }, [])

    // useEffect(() => {
    //     const allUsers = async () => {
    //         const users = await getUsers(threadsUsersIds)
    //         for (let i = 0; i < users.length; i++) {
    //             for (let j of chatThreads) {
    //                 if (j.userLocalDbIds.includes(users[i]._id))
    //                     users[i].chatRoomId = j.id
    //             }
    //         }
    //         setThreadsUsers(users)
    //     }
    //     threadsUsersIds.length != 0 && allUsers()
    // }, [threadsUsersIds])

    return (<>
        {loading ?
            <View style={styles.loadingContainer}>
                <ActivityIndicator color={'#005A9C'} size={'large'} />
            </View>
            :
            <View style={styles.container}>
                <FlatList
                    data={threadsUsers}
                    renderItem={({ item }) => (<ChatRoomCard data={item} action={() => navigation.navigate('Chat', item)} />)}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id}
                    style={{ width: '100%' }}
                />
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
    loadingContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});