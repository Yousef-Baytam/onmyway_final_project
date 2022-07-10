import { StyleSheet, View, Text } from 'react-native';

export default function Browse() {

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