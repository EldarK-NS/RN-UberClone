import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import UberTypes from './../UberTypes/UberTypes';
import RouteMap from './../RouteMap/RouteMap';

export default function SearchResults(props) {
    return (
        <View style={styles.container}>
            <View style={styles.map}>

                <RouteMap />
            </View>
            <View style={styles.type}>

                <UberTypes />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    map: {
        height: Dimensions.get('window').height * 0.5
    },
    // type: {
    //     height: 400
    // },

})
