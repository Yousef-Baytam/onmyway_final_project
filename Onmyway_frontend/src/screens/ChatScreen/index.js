import { useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import ProfileOptions from '../../components/ProfileOptions';
import UserProfileHeaderButton from '../../components/UserProfileHeaderButton';
import { addChatRoom } from '../../controllers/firebaseControllers/messagesController';
import { renderLoading, scrollToBottom, renderSend, renderBubble } from './helper'
import { doc, onSnapshot, collection, query, orderBy } from "firebase/firestore"
import { db } from '../../../firebase'

export default function Chat({ navigation }) {
    const route = useRoute()
    const chatRoom = route.params

    const [messages, setMessages] = useState([])

    const hanldeSendMessage = async (text) => {
        const res = await addChatRoom(chatRoom.chatRoomId, {
            text: text,
            createdAt: new Date().getTime(),
            user: {
                _id: chatRoom._id,
            }
        })
    }

    useLayoutEffect(() => {
        const roomRef = doc(db, 'chatRooms', chatRoom.chatRoomId)
        const messageRef = collection(roomRef, 'messages')
        const q = query(messageRef, orderBy("createdAt", "desc"))
        const unsub = onSnapshot(
            q,
            (docs) => {
                let msgs = []
                docs.forEach((doc) => {
                    console.log({ ...doc.data(), _id: doc.id })
                    msgs.push({ ...doc.data(), _id: doc.id })
                })
                setMessages(msgs)
            })
        return unsub()
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `${ chatRoom.username }`, headerLeftContainerStyle: { marginTop: 20 },
            headerBackgroundContainerStyle: { height: 80 },
            headerRightContainerStyle: { marginTop: 20 },
            headerTitleContainerStyle: styles.headerStyle,
            headerStyle: { backgroundColor: '#A1CCE4' },
            headerTintColor: '#fff',
            headerRight: () => (<View style={styles.headerIcon}>
                <View style={styles.imageHeaderContainer}>
                    <UserProfileHeaderButton action={() => { navigation.navigate('Profile', chatRoom) }} image={chatRoom.hasOwnProperty('image') && Object.keys(chatRoom.image).length && chatRoom.image.url} />
                </View>
                <ProfileOptions custom={{ width: 8 }} />
            </View>)
        })

    }, [])

    const onSend = useCallback((message = []) => {
        console.log(message)
        setMessages(previousMessages => GiftedChat.append(previousMessages, message))
        hanldeSendMessage(message[0].text)
    }, [])

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
        flexDirection: 'row'
    },
    imageHeaderContainer: {
        marginRight: 8,
        marginLeft: 0
    },
    headerStyle: {
        textAlign: 'right',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 60,
        paddingLeft: 30,
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