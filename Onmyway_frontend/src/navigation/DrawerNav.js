import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { View, StyleSheet, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import LogoutIcon from '../assets/icons/LogoutIcon';
import { useLoggedIn } from '../context/LoggedInContext';
import storage from '../storage/asyncStorage';
import TabNav from './TabNav';

function CustomDrawerContent(props) {
    const { handleLoggedIn } = useLoggedIn()

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View>
                <Pressable onPress={() => { storage.remove({ key: 'token' }); handleLoggedIn(false) }} style={styles.logoutBtn} >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Logout</Text>
                    <LogoutIcon />
                </Pressable>
            </View>
        </View>
    );
}

export function DrawerNav() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, drawerPosition: 'right' }} initialRouteName="Browse" drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={TabNav} />
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
    }
});