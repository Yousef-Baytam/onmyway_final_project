import { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Modal, Text, Dimensions } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

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
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    fetchDetails={true}
                    GooglePlacesSearchQuery={{
                        rankby: 'distance'
                    }}
                    onPress={(data, details = null) => {
                        console.log(data, details);
                    }}
                    query={{
                        key: 'YOUR API KEY',
                        language: 'en',
                        components: "country:LB",
                        types: '...',
                        location: `${ initialLocation.latitude, initialLocation.longitude }`
                    }}
                    styles={{ container: styles.searchBar, listView: { backgroundColor: '#fff' } }}
                />
                {
                    locationLoaded &&
                    <MapView style={styles.map}
                        initialRegion={initialLocation}>
                        <Marker
                            coordinate={{ latitude: 33.888630, longitude: 35.496 }}
                            title="Grocery 1"
                            description="This is the first grocery"
                        >
                            <Callout tooltip onPress={() => navigation.navigate('Grocery')}>
                                <View>
                                    <View style={styles.marker_tooltip}>
                                        <Text style={styles.marker_title}>GROCERY ONE</Text>
                                        <Text>A SHORT DESCRIPTION</Text>
                                    </View>
                                    <View style={styles.arrow_border} />
                                    <View style={styles.arrow} />
                                </View>
                            </Callout>
                        </Marker>
                    </MapView>
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
    marker_tooltip: {
        flexDirection: "column",
        alignSelf: "flex-start",
        backgroundColor: "#FFFFFF",
        borderRadius: 6,
        borderColor: "#000000",
        borderWidth: 0.5,
        padding: 15
    },
    marker_title: {
        fontSize: 16,
        marginBottom: 5
    },
    arrow_border: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderTopColor: "#ccc",
        borderWidth: 16,
        alignSelf: "center",
        marginTop: -0.5
    },
    arrow: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderTopColor: "#fff",
        borderWidth: 16,
        alignSelf: "center",
        marginTop: -32
    },
    searchBar: {
        position: 'absolute',
        top: 20,
        zIndex: 1,
        width: '90%'
    }
});