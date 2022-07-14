import { StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UserImage({ image, setImage }) {
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
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
            <Image style={styles.image} source={require('../assets/blank-profile.webp')} />
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