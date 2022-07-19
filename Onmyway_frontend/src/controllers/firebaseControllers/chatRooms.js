import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../firebase"

const addChatRoom = async (email1, email2) => {
    try {
        const docRef = await addDoc(collection(db, "chatRooms"), {
            users: [email1, email2]
        })
        console.log(docRef)
    } catch (e) {
        console.log(e)
    }
}

export { addChatRoom }
