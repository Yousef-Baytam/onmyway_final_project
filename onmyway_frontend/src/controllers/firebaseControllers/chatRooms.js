import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "../../../firebase"

const addChatRoom = async (email1, email2, id1, id2, username1, username2, image1, image2) => {
    const room = {
        userLocalDbIds: [id1, id2],
        user2Online: true,
        user1Online: false,
        numberOfMessages: 0,
        sender: null,
        readStatus: null,
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
    }
    try {
        let docRef = await setDoc(doc(db, "chatRooms", `${ id1 }_${ id2 }`), room)
        console.log(room)
        return { room, id: `${ id1 }_${ id2 }` }
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

const getaChatRoom = async (roomId) => {
    try {
        const docRef = doc(db, "chatRooms", roomId);
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
        const docRef = await getDoc(roomRef)
        if (status && docRef.data().sender != userTag) {
            if (userTag == 'users1') {
                await updateDoc(roomRef, {
                    user1Online: status,
                    numberOfMessages: 0
                })
            }
            else {
                await updateDoc(roomRef, {
                    user2Online: status,
                    numberOfMessages: 0
                })
            }
        }
        else {
            if (userTag == 'users1') {
                await updateDoc(roomRef, {
                    user1Online: status,
                })
            }
            else {
                await updateDoc(roomRef, {
                    user2Online: status,
                })
            }
        }
    } catch (e) {
        console.log(e)
    }
}

const updateReadStatus = async (roomId, status) => {
    try {
        const roomRef = doc(db, 'chatRooms', roomId)
        await updateDoc(roomRef, {
            readStatus: status
        })
    } catch (e) {
        console.log(e)
    }
}

export { addChatRoom, getChatRoom, updateInChatRoomStatus, getaChatRoom, updateReadStatus }
