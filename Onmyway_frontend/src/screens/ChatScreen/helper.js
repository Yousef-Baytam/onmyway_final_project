import DownArrowIcon from '../../assets/icons/DownArrowIcon';
import SendButtonIcon from '../../assets/icons/SendButtonIcon';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Bubble, Send } from 'react-native-gifted-chat';

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
const renderLoading = () => {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#6646ee" />
        </View>
    )
}

const styles = StyleSheet.create({
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

export { renderLoading, scrollToBottom, renderSend, renderBubble }