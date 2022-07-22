import { View, Modal, StyleSheet } from 'react-native'
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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default PostsModal