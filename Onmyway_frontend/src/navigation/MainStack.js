import { createStackNavigator } from '@react-navigation/stack';
import Browse from '../screens/BrowseScreen'
import UserProfile from '../screens/UserProfileScreen'
import NewPost from '../screens/NewPostScreen'
import Map from '../screens/MapScreen'
import DrawerToggler from '../components/DrawerToggler';
import { CommonActions, DrawerActions } from '@react-navigation/native';
import UserProfileHeaderButton from '../components/UserProfileHeaderButton';
import BackArrow from '../components/BackArrow';

export function MainStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={({ navigation }) => ({
            headerRight: () => (
                <DrawerToggler action={() => navigation.dispatch(DrawerActions.openDrawer())} />), headerMode: 'float', headerStyle: { elevation: 0 }
        })
        }>
            <Stack.Screen name="Browse" component={Browse} options={({ navigation }) => ({
                headerTitle: '', headerLeft: () => (
                    <UserProfileHeaderButton action={() => { navigation.navigate('UserProfile') }} />),
            })
            } />
            <Stack.Group screenOptions={({ navigation }) => ({
                headerLeft: () => (
                    <BackArrow action={() => { navigation.dispatch(CommonActions.goBack()) }} />), headerTitleAlign: 'center'
            })}>
                <Stack.Screen name="UserProfile" component={UserProfile} options={{
                    headerTitle: 'My Profile'
                }} />
                <Stack.Screen name="NewPost" component={NewPost} options={{
                    headerTitle: 'New Post'
                }} />
                <Stack.Screen name="Map" component={Map} />
            </Stack.Group>

        </Stack.Navigator>
    );
}