import { createStackNavigator } from '@react-navigation/stack';
import Browse from '../screens/BrowseScreen'
import UserProfile from '../screens/UserProfileScreen'
import NewPost from '../screens/NewPostScreen'
import Map from '../screens/MapScreen'

export function MainStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Browse" component={Browse} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="NewPost" component={NewPost} />
            <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
    );
}