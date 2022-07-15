import { StyleSheet, View, Modal, Text } from 'react-native';
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
        <View style={styles.modalConatiner}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.container}>
                    <Camera style={styles.camera} type={type}>
                        <View style={styles.buttonContainer}>
                            <Pressable
                                style={styles.button}
                                onPress={() => {
                                    setType(type === CameraType.back ? CameraType.front : CameraType.back);
                                }}>
                                <Text style={styles.text}> Flip </Text>
                            </Pressable>
                        </View>
                    </Camera>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalConatiner: {
        height: '100%',
        width: '100%',

    },
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    camera: {
        height: 400,
        width: '100%'
    }
})