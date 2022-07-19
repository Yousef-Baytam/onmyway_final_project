import { StyleSheet, View, Text } from 'react-native';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from '../../../firebase'

export default function AllChats({ navigation }) {
    const [chatThreads, setChatThreads] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const q = query(collection(db, "chatRooms"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const chatRooms = []
            querySnapshot.forEach((doc) => {
                chatRooms.push(doc.data())
            })
            setChatThreads(chatRooms)

            if (loading) {
                setLoading(false);
            }
        })
        return () => unsubscribe()
    }, [])

    return (
        <View style={styles.container}>
            <Text>All Chats YAAAYY!!!</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});