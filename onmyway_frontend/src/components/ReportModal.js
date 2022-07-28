import { View, TextInput, Modal, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';
import { reportUser } from '../controllers/userController';
import { useTheme } from '../context/ThemeContext';

const ReportModal = ({ showReportModal, setShowReportModal, reportTitle, setReportTitle, reportDesc, setReportDesc, id }) => {

    const { theme } = useTheme()

    const handleSubmitReport = async () => {
        try {
            await reportUser(id, { reportType: reportTitle, report: reportDesc })
            setShowReportModal(false)
        } catch (e) {
            alert('Error reporting this user at the moment, try again later')
        }
    }

    return (
        <Modal
            animationType="slide"
            visible={showReportModal}
            onRequestClose={() => {
                setShowReportModal(!showReportModal)
            }}>
            <View style={[styles.container, { backgroundColor: theme.bg }]}>
                <TextInput style={[styles.input, { backgroundColor: theme.postCard, color: theme.text }]}
                    onChangeText={setReportTitle}
                    value={reportTitle}
                    placeholder="Report Type"
                    keyboardType="default" />
                <TextInput style={[styles.input, { backgroundColor: theme.postCard, color: theme.text }]}
                    onChangeText={setReportDesc}
                    value={reportDesc}
                    multiline={true}
                    numberOfLines={5}
                    placeholder="Description"
                    keyboardType="default" />
                <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 50 }}>
                    <CustomButton text={'Cancel'} custom={{ width: '40%' }} action={() => setShowReportModal(false)} />
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