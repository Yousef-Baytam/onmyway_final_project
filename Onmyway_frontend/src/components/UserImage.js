import { StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function UserImage({ image, setImage }) {
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            base64: true,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        })
        console.log(result)

        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

    return (
        <>
            <Pressable onPress={pickImage}>
                <Image style={styles.image} source={{ uri: image } || require('../assets/blank-profile.webp')} />
            </Pressable>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
    },
});