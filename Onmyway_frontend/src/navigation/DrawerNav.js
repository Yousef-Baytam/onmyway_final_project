import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { View, StyleSheet, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
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
                    <Text>Logout</Text>
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
        width: '100%',
        height: 50,
        justifyContent: 'center',
        margin: 10,
        paddingLeft: 30
    }
});