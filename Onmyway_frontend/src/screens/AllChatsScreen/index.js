import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from '../../../firebase'
import { useUser } from '../../context/UserContext';

export default function AllChats({ navigation }) {
    const { user } = useUser()

    const [chatThreads, setChatThreads] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const q = query(collection(db, "chatRooms"), where('userLocalDbIds', 'array-contains', user._id))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const chatRooms = []
            querySnapshot.forEach((doc) => {
                chatRooms.push({ ...doc.data(), id: doc.id })
            })
            setChatThreads(chatRooms)

            if (loading) {
                setLoading(false);
            }
        })
        return () => unsubscribe()
    }, [])

    return (<>
        {loading ?
            <ActivityIndicator color={'#005A9C'} size={'large'} />
            :
            <View style={styles.container}>
                <Text>All Chats YAAAYY!!!</Text>
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