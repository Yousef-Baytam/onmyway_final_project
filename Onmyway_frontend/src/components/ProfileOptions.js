import { StyleSheet, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ThreeDotsIcon from '../assets/icons/ThreeDotsIcon';

export default function ProfileOptions({ action, custom }) {
    return (
        <View style={[styles.container, custom]}>
            <Pressable onPress={action}>
                <ThreeDotsIcon />
            </Pressable>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

PressableText.defaultProps = {
    custom: {}
}