import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
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
                <DrawerItem label="Logout" onPress={() => { storage.remove({ key: 'token' }); handleLoggedIn(false) }} />
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

});