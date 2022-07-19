import { doc, collection, addDoc } from "firebase/firestore"
import { db } from "../../../firebase"

const addChatRoom = async (roomId, message) => {
    console.log(roomId)
    try {
        const roomRef = doc(db, 'chatRooms', roomId)
        const messageRef = collection(roomRef, 'messages')
        const addedMessage = await addDoc(messageRef, message)
        console.log(addedMessage)
    } catch (e) {
        console.log(e)
    }
}

export { addChatRoom }