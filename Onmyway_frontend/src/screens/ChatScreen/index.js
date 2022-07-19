import { useRoute } from '@react-navigation/native';
import { useCallback, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import UserProfileHeaderButton from '../../components/UserProfileHeaderButton';

export default function Chat({ navigation }) {
    const route = useRoute()
    const chatRoom = route.params

    const [messages, setMessages] = useState([
        {
            _id: 0,
            text: 'New room created.',
            createdAt: new Date().getTime(),
            system: true
        },
        {
            _id: 1,
            text: 'Henlo!',
            createdAt: new Date().getTime(),
            user: {
                _id: 2,
                name: 'Test User'
            }
        }
    ]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: `${ chatRoom.username }`, headerRight: () => (
                <UserProfileHeaderButton action={() => { navigation.navigate('UserProfile') }} />)
        })

    }, [])


    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});