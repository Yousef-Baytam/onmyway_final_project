import { StyleSheet, View, Modal } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';

export default function CamModal({ modalVisible, setModalVisible }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({

})