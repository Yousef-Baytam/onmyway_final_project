import { useCallback, useEffect, useState } from 'react';
import { RefreshControl, StyleSheet, View, FlatList } from 'react-native';
import AddPost from '../../components/AddPost';
import FilterBar from '../../components/FilterBar';
import PostCard from '../../components/PostCard';
import { getPost } from '../../controllers/postsController'
import { useTheme } from '../../context/ThemeContext';
import { useFocusEffect } from '@react-navigation/native';
import { useUser } from '../../context/UserContext';

export default function Browse({ navigation }) {
    const { theme } = useTheme()
    const { user } = useUser()
    const [posts, setPosts] = useState(null)
    const [refreshing, setRefreshing] = useState(false)
    const [filter, setFilter] = useState(null)

    const handleGetPosts = async () => {
        try {
            const res = await getPost()
            setPosts(res.results.filter((e) => ((e.owner._id != user._id) && !user.blocked.includes(e.owner._id) && !e.owner.blocked.includes(user._id))))
        } catch (e) { console.log(e) }
    }

    useFocusEffect(
        useCallback(() => {
            handleGetPosts()
        }, [user])
    )

    const onRefresh = useCallback(async () => {
        setRefreshing(true)
        await handleGetPosts()
        setRefreshing(false)
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: theme.bg }]}>
            <FilterBar setFilter={setFilter} posts={posts} filter={filter} />
            {posts && <FlatList
                data={filter || posts}
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