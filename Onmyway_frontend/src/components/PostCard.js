import { StyleSheet, View, Text, Image } from 'react-native';

export default function PostCard(data) {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View>
                    <Image source={require('../assets/blank-profile.webp')} style={styles.image} />
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
        height: 120,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginVertical: 20
    },
    cardContainer: {
        width: '100%',
        height: 120,
        backgroundColor: '#EAEAEA',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,

    },
    image: {
        borderRadius: 10,
        marginLeft: 5,
        width: 110,
        height: 110
    }
});