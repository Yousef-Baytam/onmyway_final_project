import { StyleSheet, View, Text, Image } from 'react-native';
import { useUser } from '../../context/UserContext';

export default function UserProfile({ navigation }) {
    const { user } = useUser()

    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image source={require('../../assets/blank-profile.webp')} />
                {/* <StarRating/> */}
            </View>
            <View>
                <View>
                    {/* <UserName/> */}
                    {/* <UserEmail/> */}
                    {/* <UserPhone/> */}
                    {/* <UserGender/> */}
                    {/* <UserDob/> */}
                    {/* <UserCar/> */}
                    {/* <MusicPrefrence/> */}
                </View>
            </View>
            <View>
                <View>
                    {/* RidesOffered RN */}
                    {/* RidesJoined RN*/}
                </View>
                <View>
                    {/* RidesOffered history*/}
                    {/* RidesJoined history*/}
                </View>
            </View>
            <View>
                <View>
                    {/* Button */}
                </View>
            </View>
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
    imageView: {
        width: '40%',
        height: '40%'
    }
});