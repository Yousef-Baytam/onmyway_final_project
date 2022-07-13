import { StyleSheet, View, Text, Image } from 'react-native';

export default function PostCard(data) {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Image />
                </View>
                <View>
                    <View>
                        <View>
                            <Text></Text>
                            {/* Icon */}
                        </View>
                        <View>
                            <Text></Text>
                            {/* Icon */}
                        </View>
                        <View>
                            <Text></Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <View>
                                <Text></Text>
                                {/* Icon */}
                            </View>
                            <View>
                                <Text></Text>
                                {/* Icon */}
                            </View>
                            <View>
                                <Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
});