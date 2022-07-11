import { StyleSheet, View, Text } from 'react-native';
import AddPost from '../../components/AddPost';

export default function Browse() {

    return (
        <View style={styles.container}>
            <AddPost />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});