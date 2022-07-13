import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import AddPost from '../../components/AddPost';
import PostCard from '../../components/PostCard';
import { getPost } from '../../controllers/postsController'

export default function Browse({ navigation }) {
    const [posts, setPosts] = useState('')

    const handleGetPosts = async () => {
        try {
            const res = await getPost()
            setPosts(res.results)
        } catch (e) { console.log(e) }
    }

    useEffect(() => {
        handleGetPosts()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={posts}
                renderItem={({ i }) => (<PostCard data={i} />)}
                showsVerticalScrollIndicator={false}
                style={{ width: '100%', marginLeft: 42 }}
            />
            <View style={{ position: 'absolute', bottom: 10, right: '3%' }}>
                <AddPost action={() => navigation.navigate('NewPost')} />
            </View>
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