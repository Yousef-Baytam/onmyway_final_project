import { StyleSheet, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export default function AuthButton({ value }) {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{value}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
});