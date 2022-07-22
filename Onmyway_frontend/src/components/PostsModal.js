import { View, Modal, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import PostCard from './PostCard'
import { useTheme } from '../context/ThemeContext';

const PostsModal = ({ show, setShow, data }) => {
    const { theme } = useTheme()

    return (
        <Modal
            animationType="slide"
            visible={show}
            onRequestClose={() => {
                setShow(!show)
            }}>
            <View style={[styles.container, { backgroundColor: theme.bg }]}>
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
    }
})

export default PostsModal