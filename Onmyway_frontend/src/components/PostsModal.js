import { View, Modal } from 'react-native'
import React from 'react'

const PostsModal = ({ show, setShow, data }) => {
    return (
        <Modal
            animationType="slide"
            visible={show}
            onRequestClose={() => {
                setShow(!show)
            }}>
            <View style={styles.container}>

            </View>
        </Modal>
    )
}

export default PostsModal