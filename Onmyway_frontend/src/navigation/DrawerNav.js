import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import Browse from '../screens/BrowseScreen';
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
        <Drawer.Navigator initialRouteName="Browse" drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Browse" component={MainStack} options={{
                headerTitle: ''
            }} />
        </Drawer.Navigator>
    );
}