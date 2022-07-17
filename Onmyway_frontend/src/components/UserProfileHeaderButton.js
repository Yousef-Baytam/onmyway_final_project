import { StyleSheet, View, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import UserHeaderIcon from '../assets/icons/UserHeaderIcon';
import { useUser } from '../context/UserContext';

export default function UserProfileHeaderButton({ action }) {
    const { user } = useUser()

    return (
        <View style={styles.container}>
            <Pressable onPress={action}>
                {
                    user.image.url ?
                        <Image style={styles.image} source={{ uri: user.image.url }} />
                        :
                        <UserHeaderIcon />
                }
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
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    }
});