import { useLayoutEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import UserProfileHeaderButton from '../../components/UserProfileHeaderButton';

export default function Browse({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <UserProfileHeaderButton
                    action={() => {
                        navigation.navigate('UserProfile')
                    }}
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text>POSTS!!!! YAAYYY</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});