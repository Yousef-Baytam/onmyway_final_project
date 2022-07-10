import { StyleSheet, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import DrawerIcon from '../assets/icons/DrawerIcon';

export default function DrawerToggler({ action }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={action}>
                <DrawerIcon />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 20,
        alignItems: 'center',
        marginLeft: 20
    }
});