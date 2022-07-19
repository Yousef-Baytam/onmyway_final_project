import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../firebase"

const addChatRoom = async () => {
    const docRef = await addDoc(collection(db, "chatRooms"), {

    });
}
