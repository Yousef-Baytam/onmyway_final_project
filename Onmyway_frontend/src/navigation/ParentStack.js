import { CommonActions, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from 'react-navigation-stack';
import BackArrow from '../components/BackArrow';
import DrawerToggler from '../components/DrawerToggler';
import Chat from '../screens/ChatScreen';
import TabNav from './TabNav';

export function ParentStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={({ navigation }) => ({
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerRight: () => (
                <DrawerToggler action={() => navigation.dispatch(DrawerActions.openDrawer())} />), headerMode: 'float', headerStyle: { elevation: 0 }
        })
        }>
            <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false }} />
            <Stack.Screen name="Chat" component={Chat} options={({ navigation }) => ({
                headerLeft: () => (
                    <BackArrow custom={'#fff'} action={() => { navigation.dispatch(CommonActions.goBack()) }} />), headerTitleAlign: 'center'
            })} />
        </Stack.Navigator>
    );
}