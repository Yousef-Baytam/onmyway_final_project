import { StyleSheet, Image, View, Modal, Text, LayoutAnimation } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { updateImage } from '../controllers/userController';
import PressableText from './PressableText';
import { useState } from 'react';
import CamModal from './CamModal';
import theme from '../constants/theme';
import { useTheme } from '../context/ThemeContext';
import Camera2Icon from '../assets/icons/Camera2Icon';
import GalleryIcon from '../assets/icons/GalleryIcon';

export default function UserImage({ image, setImage, handleUser, setVisible, visible, display }) {
    const [coordinates, setCoordinates] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    const { theme } = useTheme()

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
        LayoutAnimation.configureNext(
            LayoutAnimation.create(100, 'easeInEaseOut', 'scaleXY')
        )
        setVisible(true)
        setCoordinates({ top: e.nativeEvent.locationY, left: e.nativeEvent.locationX })
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.2,
        })

        if (!result.cancelled) {
            handleImageUpload(result)
        }
    }

    return (
        <>
            {
                display ?
                    <Image style={styles.image} source={image ? { uri: image } : require('../assets/blank-profile.webp')} />
                    :
                    <>
                        <Pressable onPress={toggleImageBox}>
                            <Image style={styles.image} source={image ? { uri: image } : require('../assets/blank-profile.webp')} />
                        </Pressable>
                        <View style={[styles.imageViewBox, coordinates, { maxHeight: visible ? '100%' : 0, backgroundColor: theme.postCardInfo, justifyContent: 'space-evenly' }]}>
                            <Pressable onPress={pickImage}>
                                <GalleryIcon />
                            </Pressable>
                            <Pressable onPress={() => setModalVisible(true)}>
                                <Camera2Icon />
                            </Pressable>
                        </View>
                        <CamModal setModalVisible={setModalVisible} modalVisible={modalVisible} handleImageUpload={handleImageUpload} />
                    </>
            }
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
        overflow: 'hidden'
    }
});

UserImage.defaultProps = {
    display: false
}