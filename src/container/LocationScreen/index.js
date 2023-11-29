import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import {LocationHelper} from '../../helpers';
import analytics from '@react-native-firebase/analytics';

export default function LocationScreen() {
  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = () => {
    LocationHelper.checkLocationPermission(
      () => {
        LocationHelper.trackUserLocation(
          position => {
            console.log(position);
          },
          error => {
            console.log(error);
          },
        );
      },
      error => {
        console.log(error);
      },
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Location Screen</Text>
      <Button
        title={'Fetch location'}
        onPress={() => {
          fetchLocation();
        }}
      />
      <Button
        title="Analytics"
        onPress={async () =>
          await analytics().logEvent('basket', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
          })
        }
      />
    </View>
  );
}
