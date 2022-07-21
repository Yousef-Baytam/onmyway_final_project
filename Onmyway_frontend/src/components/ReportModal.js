import { View, Text, Modal, StyleSheet } from 'react-native'
import React from 'react'

const ReportModal = ({ showReportModal, setShowReportModal }) => {
    return (
        <Modal
            animationType="slide"
            visible={showReportModal}
            onRequestClose={() => {
                setShowReportModal(!showReportModal);
            }}>
            <View style={styles.Container}>

            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
})

export default ReportModal