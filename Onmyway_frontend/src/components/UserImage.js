import { StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UserImage({ image, setImage }) {
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