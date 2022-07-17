import { useCallback, useEffect, useState } from 'react';
import { RefreshControl, StyleSheet, View, FlatList } from 'react-native';
import AddPost from '../../components/AddPost';
import FilterBar from '../../components/FilterBar';
import PostCard from '../../components/PostCard';
import { getPost } from '../../controllers/postsController'

export default function Browse({ navigation }) {
    const [posts, setPosts] = useState(null)
    const [refreshing, setRefreshing] = useState(false)


    const handleGetPosts = async () => {
        try {
            const res = await getPost()
            setPosts(res.results)
        } catch (e) { console.log(e) }
    }

    useEffect(() => {
        handleGetPosts()
    }, [])

    const onRefresh = useCallback(async () => {
        setRefreshing(true)
        await handleGetPosts()
        setRefreshing(false)
    }, []);

    return (
        <View style={styles.container}>
            <FilterBar />
            {posts && <FlatList
                data={posts}
                renderItem={({ item }) => (<PostCard data={item} />)}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item._id}
                style={{ width: '100%', marginLeft: 42 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />}
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