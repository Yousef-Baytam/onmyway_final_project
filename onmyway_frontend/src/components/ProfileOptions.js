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
        width: 15,
        height: '100%',
        marginRight: 20,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

ProfileOptions.defaultProps = {
    custom: {}
}