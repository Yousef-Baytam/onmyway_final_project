import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { useUser } from '../context/UserContext';
import storage from '../storage/asyncStorage';
import TabNav from './TabNav';

function CustomDrawerContent(props) {
    const { handleUser } = useUser()

    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={() => { storage.remove({ key: 'token' }); handleUser({}) }} />
        </DrawerContentScrollView>
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