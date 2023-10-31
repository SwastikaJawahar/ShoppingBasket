import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

function Catagories(props) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('ListItem');
        }}
        activeOpacity={0.2}
        style={{marginHorizontal: 10}}>
        <View>
          <Image
            style={{width: 350, height: 200, marginVertical: 20}}
            source={{
              uri: 'https://mobileshark.co.uk/blog/wp-content/uploads/ADBS_227624472-1-1024x640.jpeg.webp',
            }}
          />
        </View>
      </TouchableOpacity>
      <Text>Dress</Text>
      <Text>Electronics</Text>
      <Text>Pet items</Text>
    </View>
  );
}

export default Catagories;
