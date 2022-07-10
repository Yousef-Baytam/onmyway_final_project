import { createStackNavigator } from '@react-navigation/stack';
import Browse from '../screens/BrowseScreen'
import UserProfile from '../screens/UserProfileScreen'
import NewPost from '../screens/NewPostScreen'
import Map from '../screens/MapScreen'
import DrawerToggler from '../components/DrawerToggler';
import { DrawerActions } from '@react-navigation/native';
import UserProfileHeaderButton from '../components/UserProfileHeaderButton';

export function MainStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={({ navigation }) => ({
            headerRight: () => (
                <DrawerToggler action={() => navigation.dispatch(DrawerActions.openDrawer())} />), headerMode: 'float'
        })
        }>
            <Stack.Screen name="Browse" component={Browse} options={({ navigation }) => ({
                headerTitle: '', headerLeft: () => (
                    <UserProfileHeaderButton action={() => { navigation.navigate('UserProfile') }} />),
            })
            } />
            <Stack.Screen name="UserProfile" component={UserProfile} options={{
                headerTitle: 'My Profile', headerTitleAlign: 'center'
            }} />
            <Stack.Screen name="NewPost" component={NewPost} />
            <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
    );
}