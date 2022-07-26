import { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, Modal, Text, Dimensions } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import CustomButton from './CustomButton';

export default function Map({ showMapModal, setShowMapModal, value, setValue, display }) {
    const [initialLocation, setInitailLocation] = useState({
        latitude: display ? value.geometry.coordinates[0] : 33.8938,
        longitude: display ? value.geometry.coordinates[1] : 35.5018,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const [locationLoaded, setLocationLoaded] = useState(false)
    const [pressedLocation, setPressedLocation] = useState(null)

    useLayoutEffect(() => {
        if (!display)
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
        else {
            setLocationLoaded(true)
        }
    }, []);

    const handlePress = (e) => {
        setPressedLocation({ lat: e.nativeEvent.coordinate.latitude, lng: e.nativeEvent.coordinate.longitude })
        setValue({
            ...value, geometry: {
                type: 'Point',
                coordinates: [e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude]
            }
        })
    }

    return (
        <Modal
            animationType="slide"
            visible={showMapModal}
            onRequestClose={() => {
                setShowMapModal(!showMapModal);
            }}>
            <View style={styles.container}>
                {/* Needs google places api key to work/ plus google geocoding api key to be able to reverse geocode and get
                the location name baised on the press location of the user */}
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    fetchDetails={true}
                    GooglePlacesSearchQuery={{
                        rankby: 'distance'
                    }}
                    onPress={(data, details = null) => {
                        setSearchedLocation({
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        })
                    }}
                    query={{
                        key: 'NO API KEY SAD',
                        language: 'en',
                        components: "country:LB",
                        types: '...',
                        location: `${ initialLocation.latitude, initialLocation.longitude }`
                    }}
                    styles={{ container: styles.searchBar, listView: { backgroundColor: '#fff' } }}
                />
                {display ?
                    <MapView style={styles.map}
                        initialRegion={initialLocation}>
                        <Marker
                            coordinate={{ latitude: initialLocation.latitude, longitude: initialLocation.longitude }}
                            title="Grocery 1"
                            description="This is the first grocery"
                        >
                            <Callout tooltip onPress={() => navigation.navigate('Grocery')}>
                                <View>
                                    <View style={styles.marker_tooltip}>
                                        <Text style={styles.marker_title}>{`${ initialLocation.latitude }, ${ initialLocation.longitude }`}</Text>
                                        <Text>coordinates of the selected location</Text>
                                    </View>
                                    <View style={styles.arrow_border} />
                                    <View style={styles.arrow} />
                                </View>
                            </Callout>
                        </Marker>
                    </MapView>
                    :
                    locationLoaded &&
                    <MapView style={styles.map}
                        initialRegion={initialLocation}
                        onPress={handlePress}>
                        {
                            pressedLocation &&
                            <Marker
                                coordinate={{ latitude: pressedLocation?.lat, longitude: pressedLocation?.lng }}
                                title="Grocery 1"
                                description="This is the first grocery"
                            >
                                <Callout tooltip onPress={() => navigation.navigate('Grocery')}>
                                    <View>
                                        <View style={styles.marker_tooltip}>
                                            <Text style={styles.marker_title}>{`${ pressedLocation.lat }, ${ pressedLocation.lng }`}</Text>
                                            <Text>coordinates of the selected location</Text>
                                        </View>
                                        <View style={styles.arrow_border} />
                                        <View style={styles.arrow} />
                                    </View>
                                </Callout>
                            </Marker>
                        }
                    </MapView>
                }
                <CustomButton custom={{ position: 'absolute', bottom: 20, right: 20, zIndex: 1 }} text={'Select'} action={() => setShowMapModal(false)} />
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

Map.defaultProps = {
    display: false
}