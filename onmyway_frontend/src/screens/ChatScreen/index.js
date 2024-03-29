import { CommonActions, useFocusEffect, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import ProfileOptions from '../../components/ProfileOptions';
import UserProfileHeaderButton from '../../components/UserProfileHeaderButton';
import { addChatRoom } from '../../controllers/firebaseControllers/messagesController';
import { renderLoading, scrollToBottom, renderSend, renderBubble } from './helper'
import { doc, onSnapshot, collection, query, orderBy } from "firebase/firestore"
import { db } from '../../../firebase'
import { getaChatRoom, updateInChatRoomStatus, updateReadStatus } from '../../controllers/firebaseControllers/chatRooms';
import { useUser } from '../../context/UserContext';
import { sendPushNotification } from '../../../NotificationRegister';
import BackArrow from '../../components/BackArrow';

export default function Chat({ navigation, use }) {
    const route = useRoute()
    const chatRoom = route.params
    const { user } = useUser()
    const [messages, setMessages] = useState([])
    const [chatRoomInfo, setChatRoomInfo] = useState(null)

    const hanldeSendMessage = async (text) => {
        const res = await addChatRoom(chatRoom.chatRoomId, {
            text: text,
            createdAt: new Date().getTime(),
            user: {
                _id: chatRoom._id,
            },
        },
            chatRoom.userTag,
            chatRoom.userTag == 'users1' ? chatRoomInfo.user2Online : chatRoomInfo.user1Online,
            chatRoomInfo.latestMessage.sender == chatRoom.userTag ? (chatRoomInfo.numberOfMessages + 1) : 1
        )
        chatRoom?.notification?.status == 'active' &&
            sendPushNotification(chatRoom?.notification?.token, 'New Message', `${ user.username }: ${ text }`)
    }

    const handleChatRoomStatus = async () => {
        const room = await getaChatRoom(chatRoom.chatRoomId)
        if (room.sender != chatRoom.userTag) {
            await updateReadStatus(chatRoom.chatRoomId, true)
        }
    }

    useFocusEffect(
        useCallback(() => {
            handleChatRoomStatus()
            updateInChatRoomStatus(chatRoom.chatRoomId, chatRoom.userTag, true)
            return () => {
                updateInChatRoomStatus(chatRoom.chatRoomId, chatRoom.userTag, false)
            }
        }, [])
    )

    useLayoutEffect(() => {
        const roomRef = doc(db, 'chatRooms', chatRoom.chatRoomId)
        const messageRef = collection(roomRef, 'messages')
        const q = query(messageRef, orderBy("createdAt", "desc"))
        const unsub = onSnapshot(
            q,
            (docs) => {
                let msgs = []
                docs.forEach((doc) => {
                    msgs.push({ ...doc.data(), _id: doc.id })
                })
                if (msgs != messages)
                    setMessages(msgs)
            })
        return () => unsub()
    }, [])

    useLayoutEffect(() => {
        const roomRef = doc(db, 'chatRooms', chatRoom.chatRoomId)
        const unsub = onSnapshot(
            roomRef,
            (docs) => {
                if (docs.data() != chatRoomInfo) {
                    setChatRoomInfo(docs.data())
                }
            })
        return () => unsub()
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `${ chatRoom.username }`, headerLeftContainerStyle: { marginTop: 20 },
            headerBackgroundContainerStyle: { height: 80 },
            headerRightContainerStyle: { marginTop: 20 },
            headerTitleContainerStyle: styles.headerStyle,
            headerStyle: { backgroundColor: '#A1CCE4' },
            headerTintColor: '#fff',
            headerLeft: () => (
                <View style={styles.headerIcon}>
                    <BackArrow custom={'#fff'} action={() => { navigation.dispatch(CommonActions.goBack()) }} customContainer={{ width: 20 }} />
                    <View style={styles.imageHeaderContainer}>
                        <UserProfileHeaderButton action={() => { navigation.navigate('Profile', chatRoom) }}
                            image={{ status: true, image: chatRoom.hasOwnProperty('image') && Object.keys(chatRoom.image).length && chatRoom.image.url || null }} />
                    </View>
                </View>),
            headerRight: () => (<ProfileOptions custom={{ width: 8 }} />)
        })

    }, [])

    const onSend = useCallback((message = []) => {
        if (!user.blocked.includes(chatRoom._id) && !chatRoom.blocked.includes(user._id)) {
            setMessages(previousMessages => GiftedChat.append(previousMessages, message))
            hanldeSendMessage(message[0].text)
        }
        else {
            alert('You cannot text this user')
        }
    }, [chatRoomInfo])

    return (
        <><StatusBar
            animated={true}
            backgroundColor="#A1CCE4"
            barStyle={'light-content'}
        />
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                renderBubble={renderBubble}
                showUserAvatar={true}
                placeholder="Type your message here..."
                user={{
                    _id: chatRoom._id,
                }}
                alwaysShowSend
                textInputStyle={styles.input}
                minComposerHeight={50}
                minInputToolbarHeight={55}
                renderSend={renderSend}
                scrollToBottom={true}
                scrollToBottomComponent={scrollToBottom}
                scrollToBottomStyle={{ width: 20, height: 20 }}
                renderLoading={renderLoading}
                keyboardShouldPersistTaps='never'
                renderAvatar={null}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIcon: {
        flexDirection: 'row',
    },
    imageHeaderContainer: {
        marginRight: 0,
        marginLeft: 0
    },
    headerStyle: {
        alignItems: 'flex-start',
        paddingLeft: 0,
        marginTop: 20
    },
    input: {
        padding: 0,
    },
    sendingContainer: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomComponentContainer: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});