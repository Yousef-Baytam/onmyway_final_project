import { StyleSheet, View, Modal, Text, Dimensions } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import RepeatIcon from '../assets/icons/RepeatIcon'
import CameraIcon from '../assets/icons/CameraIcon'

export default function CamModal({ modalVisible, setModalVisible }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [camReady, setCamReady] = useState(false);
    const [showPic, setShowPic] = useState(false)
    const { width } = Dimensions.get('window');
    let height = 4 / 3 * width

    const camRef = useRef(null)

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

    const takePic = async () => {
        try {
            let pic = await camRef.current.takePictureAsync({
                aspect: [4, 3],
                quality: 1,
                base64: true,
            })
            console.log(pic)
        }
        catch (e) {
            console.log(e)
        }
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
                    <Camera style={[styles.camera, { width: width, height: height }]} type={type} ref={camRef} onCameraReady={() => setCamReady(true)}>
                    </Camera>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.button}
                            onPress={() => {
                                setType(type === CameraType.back ? CameraType.front : CameraType.back);
                            }}>
                            <RepeatIcon />
                        </Pressable>
                        {
                            camReady &&
                            <Pressable onPress={takePic}>
                                <CameraIcon />
                            </Pressable>
                        }
                    </View>
                </View>
            </Modal >
        </View >
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
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})