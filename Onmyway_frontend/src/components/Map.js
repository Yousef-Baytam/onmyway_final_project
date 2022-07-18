import { StyleSheet, View, Modal } from 'react-native';
import MapView from 'react-native-maps';

export default function Map({ showMapModal, setShowMapModal }) {

    return (
        <Modal
            animationType="slide"
            visible={showMapModal}
            onRequestClose={() => {
                setShowMapModal(!showMapModal);
            }}>
            <View style={styles.container}>
                <MapView style={styles.map} />
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
});