import { StyleSheet, View, Text, Image } from 'react-native';

export default function PostCard(data) {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View>
                    <Image source={require('../assets/blank-profile.webp')} style={styles.image} />
                </View>
                <View style={styles.infoConatiner}>
                    <View style={[styles.halfInfoContainer, { borderRightWidth: 1, borderRightColor: '#EAEAEA' }]}>
                        <View>
                            <View style={[styles.sideBar, { backgroundColor: '#92D293' }]}></View>
                        </View>
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
                    <View style={styles.halfInfoContainer}>
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
                            <View style={[styles.sideBar, { backgroundColor: '#D2686E' }]}></View>
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
    infoConatiner: {
        height: 110,
        width: '62.33%',
        backgroundColor: '#fff',
        marginLeft: 5,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    image: {
        borderRadius: 10,
        marginLeft: 5,
        width: 110,
        height: 110
    },
    halfInfoContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sideBar: {
        height: '100%',
        backgroundColor: '#000',
        width: 10,
    },
});