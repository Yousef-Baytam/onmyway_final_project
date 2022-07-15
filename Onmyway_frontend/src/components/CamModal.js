import { StyleSheet, View, Modal } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function CamModal({ modalVisible, setModalVisible }) {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.")
                    setModalVisible(!modalVisible);
                }}
            >
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({

})