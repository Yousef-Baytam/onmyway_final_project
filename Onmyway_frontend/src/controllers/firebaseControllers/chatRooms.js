import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../../firebase"

const addChatRoom = async (email1, email2, id1, id2, username1, username2, image1, image2) => {
    try {
        let docRef = await setDoc(doc(db, "chatRooms", `${ id1 }_${ id2 }`), {
            userLocalDbIds: [id1, id2],
            user2Online: false,
            user1Online: false,
            users1: {
                userId: id1,
                usename: username1,
                email: email1,
                image: image1
            },
            users2: {
                userId: id2,
                usename: username2,
                email: email2,
                image: image2
            },
            latestMessage: {
                sender: null,
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

const updateInChatRoomStatus = async (roomId, userTag, status) => {
    try {
        const roomRef = doc(db, 'chatRooms', roomId)
        if (userTag == 'user1') {
            await updateDoc(roomRef, {
                user1Online: status
            })
        }
        else {
            await updateDoc(roomRef, {
                user2Online: status
            })
        }
    } catch (e) {
        console.log(e)
    }
}

export { addChatRoom, getChatRoom, updateInChatRoomStatus }
