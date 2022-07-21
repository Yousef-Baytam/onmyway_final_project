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
            <View style={styles.container}>
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
                <View style={{ justifyContent: 'center' }}>
                    <CustomButton text={'Submit'} custom={{ width: '40%' }} action={handleSubmitReport} />
                </View>
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
    input: {
        backgroundColor: '#EAEAEA',
        width: '80%',
        padding: 10,
        margin: 20,
        borderRadius: 10
    }
})

export default ReportModal