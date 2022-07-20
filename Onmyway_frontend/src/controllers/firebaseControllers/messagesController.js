import { doc, collection, addDoc, updateDoc } from "firebase/firestore"
import { db } from "../../../firebase"

const addChatRoom = async (roomId, message, senderId, readStatus, numberOfMessages) => {
    try {
        const roomRef = doc(db, 'chatRooms', roomId)
        const messageRef = collection(roomRef, 'messages')
        const addedMessage = await addDoc(messageRef, message)
        const latestMessage = await updateDoc(roomRef, {
            latestMessage: {
                text: message.text,
                createdAt: new Date().getTime()
            },
            sender: senderId,
            readStatus: readStatus,
            numberOfMessages: numberOfMessages,
        })
    } catch (e) {
        console.log(e)
    }
}

export { addChatRoom }