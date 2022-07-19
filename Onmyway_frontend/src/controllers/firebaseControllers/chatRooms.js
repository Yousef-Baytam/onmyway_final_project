import { setDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../../../firebase"

const addChatRoom = async (email1, email2, id1, id2, username1, username2) => {
    try {
        let docRef = await setDoc(doc(db, "chatRooms", `${ id1 }_${ id2 }`), {
            userLocalDbIds: [id1, id2],
            users: [email1, email2],
            usernames: [username1, username2],
            latestMessage: {
                text: null,
                createdAt: new Date().getTime()
            }
        })
        return { ...docRef.data(), id: docRef.id }
    } catch (e) {
        console.log(e)
    }
}

const getChatRoom = async (id1, id2) => {
    try {
        const docRef = doc(db, "chatRooms", `${ id1 }_${ id2 }`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { ...docSnap.data(), id: docSnap.id }
        } else {
            return false
        }
    } catch (e) {
        console.log(e)
    }
}

export { addChatRoom, getChatRoom }
