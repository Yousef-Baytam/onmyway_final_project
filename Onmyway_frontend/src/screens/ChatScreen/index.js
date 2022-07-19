import { useRoute } from '@react-navigation/native';
import { useCallback, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GiftedChat, Bubble, Send } from 'react-native-gifted-chat';
import DownArrowIcon from '../../assets/icons/DownArrowIcon';
import SendButtonIcon from '../../assets/icons/SendButtonIcon';
import ProfileOptions from '../../components/ProfileOptions';
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

    const renderBubble = (props) => {
        return <Bubble
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: '#A1CCE4'
                },
                left: {
                    backgroundColor: '#005A9C'
                }
            }}
            textStyle={{
                right: {
                    color: '#000'
                },
                left: {
                    color: '#fff'
                }
            }}
        />
    }

    const renderSend = (props) => {
        return <Send {...props}>
            <View style={styles.sendingContainer}>
                <SendButtonIcon />
            </View>
        </Send>
    }

    const scrollToBottom = () => {
        return (
            <View style={styles.bottomComponentContainer}>
                <DownArrowIcon />
            </View>
        )
    }

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


    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            renderBubble={renderBubble}
            showUserAvatar={true}
            placeholder="Type your message here..."
            user={{
                _id: 1,
            }}
            alwaysShowSend
            textInputStyle={styles.input}
            minComposerHeight={50}
            minInputToolbarHeight={55}
            renderSend={renderSend}
            scrollToBottom={true}
            scrollToBottomComponent={scrollToBottom}
            scrollToBottomStyle={{ width: 20, height: 20 }}
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
    }
});