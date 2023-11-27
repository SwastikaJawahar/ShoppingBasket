import {StyleSheet, Text, View} from 'react-native';
import React, {useState, forwardRef, useImperativeHandle, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

const MapViewComponent = forwardRef((props, ref) => {
  const mapRef = useRef(null);
  const [isMapReady, setIsMapReady] = useState(false);

  useImperativeHandle(ref, () => ({
    mytestmethod: () => {
      console.log('this is to check if it runs');
      mapRef.current.animateToRegion(
        {
          latitude: 54.9620513,
          longitude: -1.5076673,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        },
        500,
      );
    },
  }));

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation
        onMapReady={() => {
          setIsMapReady(true);
        }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {isMapReady === true &&
          props?.markers.map(thisEl => {
            return (
              <Marker
                draggable
                title={thisEl.title}
                description={'this is the description'}
                coordinate={{
                  latitude: parseFloat(thisEl.latitude),
                  longitude: parseFloat(thisEl.longitude),
                }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'purple',

                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>P</Text>
                </View>
                <Callout>
                  <View
                    style={{
                      width: 300,
                      height: 150,
                      backgroundColor: 'Yellow',
                    }}></View>
                </Callout>
              </Marker>
            );
          })}
      </MapView>
    </View>
  );
});

export default MapViewComponent;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
