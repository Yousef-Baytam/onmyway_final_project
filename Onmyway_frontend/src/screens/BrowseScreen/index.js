import { StyleSheet, View } from 'react-native';
import AddPost from '../../components/AddPost';
import PostCard from '../../components/PostCard';

export default function Browse({ navigation }) {

    return (
        <View style={styles.container}>
            <PostCard />
            <AddPost action={() => navigation.navigate('NewPost')} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});