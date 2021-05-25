/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import SearchResults from './src/components/SearchResults/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch/DestinationSearchScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

navigator.geolocation = require('@react-native-community/geolocation')

const App: () => Node = () => {

  const androidPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "UberClone App needs access to your location " +
            "so you can take awesome rides.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermissions()
    } else {
      Geolocation.requestAuthorization()
    }
  }, [])

  return (
    < >
      <StatusBar />
      {/* <HomeScreen /> */}
      <DestinationSearchScreen />
      {/* <SearchResults /> */}
    </>
  );
};


export default App;
