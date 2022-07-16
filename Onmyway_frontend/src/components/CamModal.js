import { StyleSheet, View, Modal, Text, Dimensions, Image, ActivityIndicator } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import RepeatIcon from '../assets/icons/RepeatIcon'
import CameraIcon from '../assets/icons/CameraIcon'
import BackArrowIcon from '../assets/icons/BackArrowIcon'
import CustomButton from './CustomButton';
import { CommonActions, useNavigation } from '@react-navigation/native';

export default function CamModal({ modalVisible, setModalVisible, handleImageUpload }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [camReady, setCamReady] = useState(false);
    const [showPic, setShowPic] = useState(false)
    const [currPic, setCurrPic] = useState(null)
    const [loading, setLoading] = useState(false)
    const { width } = Dimensions.get('window');
    const navigation = useNavigation()

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
        setLoading(true)
        try {
            let pic = await camRef.current.takePictureAsync({
                allowsEditing: true,
                aspect: [4, 3],
                quality: 0.2,
                base64: true,
            })
            await camRef.current.pausePreview()
            setCurrPic(pic)
            setLoading(false)
            setShowPic(true)
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
                {
                    showPic ?
                        <View style={styles.container}>
                            <Image source={{ uri: currPic.uri }} style={[styles.camera, { width: width, height: height }]} />
                            <View style={styles.buttonContainer}>
                                <View style={styles.button}>
                                    <CustomButton text={'Upload Image'} action={() => {
                                        handleImageUpload(currPic);
                                        setModalVisible(!modalVisible)
                                        setShowPic(false)
                                    }} custom={{ width: '100%' }} />
                                </View>
                                <View style={styles.button}>
                                    <Pressable onPress={() => {
                                        setCurrPic(null)
                                        setShowPic(false)
                                    }}>
                                        <BackArrowIcon />
                                    </Pressable>
                                </View>
                            </View>
                        </View> :
                        <View style={styles.container}>
                            <Camera style={[styles.camera, { width: width, height: height }]} type={type} ref={camRef} onCameraReady={() => setCamReady(true)}>
                            </Camera>
                            <View style={styles.buttonContainer}>
                                <View style={[styles.button, { marginTop: 20 }]}>
                                    <Pressable
                                        style={styles.button}
                                        onPress={() => {
                                            setType(type === CameraType.back ? CameraType.front : CameraType.back);
                                        }}>
                                        <RepeatIcon />
                                    </Pressable>
                                </View>
                                {loading ?
                                    <ActivityIndicator style={styles.button} color={'#005A9C'} size={'large'} />
                                    :
                                    <View style={styles.button}>
                                        {
                                            camReady &&
                                            <Pressable onPress={takePic}>
                                                <CameraIcon />
                                            </Pressable>
                                        }
                                    </View>}
                                <View style={styles.button}>
                                    <CustomButton text={'cancel'} action={() => setModalVisible(false)} custom={{ width: '100%' }} />
                                </View>
                            </View>
                        </View>
                }
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
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row-reverse'
    },
    button: {
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})