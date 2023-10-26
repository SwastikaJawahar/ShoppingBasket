import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function WelcomeScreen(props) {
  return (
    <View
      style={{
        backgroundColor: '#B056E1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={style.TextTitle}>Welcome to Shopping Kart for Mobiles</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ListItem')}
        style={style.TouchableOpacity}>
        <Text style={style.Text}>Start Shopping</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  TouchableOpacity: {
    height: 40,
    width: 250,
    color: 'black',
    backgroundColor: '#F7054E',
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  TextTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,
    marginTop: 40,
  },
});

export default WelcomeScreen;
