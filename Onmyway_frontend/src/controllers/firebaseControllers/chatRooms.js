import { setDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../../../firebase"

const addChatRoom = async (email1, email2) => {
    try {
        let docRef = await setDoc(doc(db, "chatRooms", `${ email1 }_${ email2 }`), {
            users: [email1, email2]
        })
        console.log(docRef)
    } catch (e) {
        console.log(e)
    }
}

const getChatRoom = async (email1, email2) => {
    try {
        const docRef = doc(db, "chatRooms", `${ email1 }_${ email2 }`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            console.log("No such document!");
        }
    } catch (e) {
        console.log(e)
    }
}

export { addChatRoom, getChatRoom }
