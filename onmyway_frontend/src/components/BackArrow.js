import { StyleSheet, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import BackArrowIcon from '../assets/icons/BackArrowIcon';

export default function BackArrow({ action, custom, customContainer }) {
    return (
        <View style={[styles.container, customContainer]}>
            <Pressable onPress={action}>
                <BackArrowIcon custom={custom} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 45,
        alignItems: 'center',
        marginLeft: 20
    }
});