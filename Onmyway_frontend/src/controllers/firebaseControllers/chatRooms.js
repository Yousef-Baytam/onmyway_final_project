import { setDoc, doc, getDoc, query, where, collection } from "firebase/firestore"
import { db } from "../../../firebase"

const addChatRoom = async (email1, email2, id1, id2, username1, username2) => {
    try {
        let docRef = await setDoc(doc(db, "chatRooms", `${ id1 }_${ id2 }`), {
            userLocalDbIds: [id1, id2],
            users: [email1, email2],
            usernames: [username1, username2]
        })
        console.log(docRef)
    } catch (e) {
        console.log(e)
    }
}

const getChatRoom = async (id1, id2) => {
    try {
        const docRef = doc(db, "chatRooms", `${ id1 }_${ id2 }`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data()
        } else {
            return false
        }
    } catch (e) {
        console.log(e)
    }
}

export { addChatRoom, getChatRoom }
