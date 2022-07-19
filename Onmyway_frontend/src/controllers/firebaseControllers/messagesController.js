import { } from "firebase/firestore"
import { db } from "../../../firebase"

const addChatRoom = async (roomId, message) => {
    try {
        const messageRef = await db.collection('chatRooms').doc(roomId)
            .collection('messages').doc(message)
        console.log(messageRef)
    } catch (e) {
        console.log(e)
    }
}

export { addChatRoom }