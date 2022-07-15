import { StyleSheet, Image, View, Modal, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { updateImage } from '../controllers/userController';
import PressableText from './PressableText';
import { useState } from 'react';

export default function UserImage({ image, setImage, handleUser }) {
    const [visible, setVisible] = useState(false)
    const [coordinates, setCoordinates] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    const handleImageUpload = async (image) => {
        try {
            const res = await updateImage(image)
            setImage(image.uri)
            handleUser(res.results)
        } catch (e) {
            console.log(e)
        }
    }

    const toggleImageBox = (e) => {
        setVisible(!visible)
        setCoordinates({ top: e.nativeEvent.locationY, left: e.nativeEvent.locationX })
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        })

        if (!result.cancelled) {
            handleImageUpload(result)
        }
    }

    return (
        <>
            <Pressable onPress={toggleImageBox}>
                <Image style={styles.image} source={{ uri: image } || require('../assets/blank-profile.webp')} />
            </Pressable>
            {
                visible &&
                <View style={[styles.imageViewBox, coordinates]}>
                    <PressableText text={'Gallery'} custom={{ width: '100%', height: '40%' }} action={pickImage} />
                    <PressableText text={'Cemera'} custom={{ width: '100%', height: '40%' }} action={() => setModalVisible(true)} />
                </View>
            }
            <View style={styles.centeredView}>
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
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
    },
    imageViewBox: {
        width: 100,
        height: 100,
        backgroundColor: '#EAEAEA',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
});