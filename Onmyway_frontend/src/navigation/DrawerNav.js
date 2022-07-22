import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { View, StyleSheet, Text, Image } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useTheme } from '../context/ThemeContext'
import LogoutIcon from '../assets/icons/LogoutIcon';
import { useLoggedIn } from '../context/LoggedInContext';
import { useUser } from '../context/UserContext';
import storage from '../storage/asyncStorage';
import { ParentStack } from './ParentStack';

function CustomDrawerContent(props) {
    const { handleLoggedIn } = useLoggedIn()
    const { user } = useUser()
    const { theme } = useTheme()
    console.log(theme)

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={user?.image && Object.keys(user.image).length > 0 ? { uri: user.image.url } : require('../assets/blank-profile.webp')} />
                    </View>
                </View>
                <DrawerItemList {...props} />
                <Pressable style={styles.logoutBtn}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>{theme.bg == '#fff' ? 'Light Mode' : 'Dark Mode'}</Text>
                    <View style={styles.icon}>
                        <LogoutIcon />
                    </View>
                </Pressable>
            </DrawerContentScrollView>
            <View>
                <Pressable onPress={() => { storage.remove({ key: 'token' }); handleLoggedIn(false) }} style={styles.logoutBtn} >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Logout</Text>
                    <View style={styles.icon}>
                        <LogoutIcon />
                    </View>
                </Pressable>
            </View>
        </View>
    );
}

export function DrawerNav() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, drawerPosition: 'right' }} initialRouteName="Browse" drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={ParentStack} />
        </Drawer.Navigator>
    );
}
const styles = StyleSheet.create({
    logoutBtn: {
        width: '93%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#D2686E',
        margin: 10,
        paddingLeft: 30,
        borderRadius: 5,
        flexDirection: 'row'
    },
    image: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: 200,
        height: 200,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    },
    icon: {
        marginRight: 15
    }
});