import { View, Modal, StyleSheet, FlatList, Text } from 'react-native'
import React from 'react'
import PostCard from './PostCard'
import { useTheme } from '../context/ThemeContext';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CancelIcon from '../assets/icons/CancelIcon';

const PostsModal = ({ show, setShow, data, text }) => {
    const { theme } = useTheme()

    return (
        <Modal
            animationType="slide"
            visible={show}
            onRequestClose={() => {
                setShow(!show)
            }}>
            <View style={[styles.container, { backgroundColor: theme.bg }]}>
                <Text style={[styles.text, { color: theme.text }]}>{text}</Text>
                <Pressable onPress={() => setShow(false)} style={styles.cancel}>
                    <CancelIcon />
                </Pressable>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (<PostCard data={item} notPressable={true} />)}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item._id}
                    style={{ width: '100%', marginLeft: 42 }}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        width: '90%',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20
    },
    cancel: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1
    }
})

export default PostsModal