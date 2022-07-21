import { View, TextInput, Modal, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';

const ReportModal = ({ showReportModal, setShowReportModal, reportTitle, setReportTitle, reportDesc, setReportDesc }) => {

    const handleSubmitReport = async () => {
        setShowReportModal(false)
    }

    return (
        <Modal
            animationType="slide"
            visible={showReportModal}
            onRequestClose={() => {
                setShowReportModal(!showReportModal)
            }}>
            <View style={styles.Container}>
                <TextInput style={styles.input}
                    onChangeText={setReportTitle}
                    value={reportTitle}
                    placeholder="Report Title"
                    keyboardType="default" />
                <TextInput style={styles.input}
                    onChangeText={setReportDesc}
                    value={reportDesc}
                    multiline={true}
                    numberOfLines={5}
                    placeholder="Description"
                    keyboardType="default" />
                <View style={[styles.buttonContainer, { justifyContent: 'center' }]}>
                    <CustomButton text={'Submit'} custom={{ width: '40%' }} action={handleSubmitReport} />
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
})

export default ReportModal