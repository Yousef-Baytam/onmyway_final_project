import { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Modal, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function Map({ showMapModal, setShowMapModal }) {
    const [initialLocation, setInitailLocation] = useState({
        latitude: 33.8938,
        longitude: 35.5018,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const [locationLoaded, setLocationLoaded] = useState(false)

    useLayoutEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access location was denied')
                return
            }

            let location = await Location.getCurrentPositionAsync({});
            setInitailLocation({ ...initialLocation, latitude: location.coords.latitude, longitude: location.coords.longitude });
            setLocationLoaded(true)
        })();
    }, []);

    return (
        <Modal
            animationType="slide"
            visible={showMapModal}
            onRequestClose={() => {
                setShowMapModal(!showMapModal);
            }}>
            <View style={styles.container}>
                {
                    locationLoaded &&
                    <MapView style={styles.map}
                        initialRegion={initialLocation} />
                }
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});