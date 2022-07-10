import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { MainStack } from './MainStack';

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </DrawerContentScrollView>
    );
}

export function DrawerNav() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Browse" drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Browse" component={MainStack} />
        </Drawer.Navigator>
    );
}