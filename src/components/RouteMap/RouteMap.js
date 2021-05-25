import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
export default function RouteMap() {


    const GOOGLE_MAPS_APIKEY = 'AIzaSyA2nVOa4MGgQhRUbgZfT6s3FTH1VSlBMYY'

    const origin = {
        latitude: 28.450627,
        longitude: -16.263045,
    }

    const destination = {
        latitude: 28.456208,
        longitude: -16.259098,
    }

    return (

        <MapView
            style={{ height: '100%', width: '100%' }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor="hotpink"
            />
            <Marker
                // key={index}
                coordinate={origin}
                title={'origin'}
            // description={marker.description}
            />
            <Marker
                // key={index}
                coordinate={destination}
                title={'destination'}
            // description={marker.description}
            />

        </MapView>
    )
}

const styles = StyleSheet.create({
    imageMarker: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
})
