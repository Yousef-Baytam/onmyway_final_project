import { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import StarRating from '../../components/StarRating';
import { useUser } from '../../context/UserContext';

export default function UserProfile({ navigation }) {
    const { user } = useUser()
    const [rating, setRating] = useState(null)
    console.log(user)

    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image style={styles.image} source={require('../../assets/blank-profile.webp')} />
                <StarRating />
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
        width: 200,
        height: 200,
        elevation: 5,
        borderRadius: 100,
    },
    image: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
    },
});