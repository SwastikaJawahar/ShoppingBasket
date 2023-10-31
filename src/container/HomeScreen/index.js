import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function HomeScreen(props) {
  return (
    <View style={style.Container}>
      <Text style={style.TextContent}>Home page</Text>
      <TouchableOpacity
        style={style.TouchableOpacity}
        onPress={() => {
          props.navigation.navigate('Catagories');
        }}>
        <Text>Go to Catagories</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387',
  },
  TouchableOpacity: {
    height: 40,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#08d4c4',
    borderWidth: 2,
  },
  TextContent: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
});
export default HomeScreen;
