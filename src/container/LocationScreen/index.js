import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {LocationHelper} from '../../helpers';

export default function LocationScreen() {
  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = () => {
    LocationHelper.checkLocationPermission(
      () => {
        LocationHelper.fetchLocation(
          position => {
            console.log(position);
          },
          error => {
            console.log(error);
          },
        );
      },
      () => {},
    );
  };

  return (
    <View>
      <Text>index</Text>
      <Button
        title={'Fetch location'}
        onPress={() => {
          fetchLocation();
        }}
      />
    </View>
  );
}
