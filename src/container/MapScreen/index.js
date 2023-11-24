import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MapViewComponent from '../../components /MapViewComponent';

const markers = [
  {latitude: '37.794861', longitude: '-122.4106587', title: 'some location 1'},
  {latitude: '37.7988486', longitude: '-122.4102691', title: 'some location 2'},
  {latitude: '37.8078286', longitude: '-122.4102791', title: 'some location 3'},
  {latitude: '37.7899486', longitude: '-122.4102691', title: 'some location 4'},
  {latitude: '37.7989586', longitude: '-122.4302691', title: 'some location 5'},
  {latitude: '37.7989586', longitude: '-122.4502691', title: 'some location 6'},
];

export default function MapScreen() {
  const [myMapMarkers, setMyMapMarkers] = useState(markers);
  return (
    <View style={{flex: 1}}>
      <MapViewComponent
        markers={markers}
        onLongPress={arg => {
          const {coordinate} = arg.nativeEvent;

          setMyMapMarkers([...myMapMarkers, coordinate]);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
