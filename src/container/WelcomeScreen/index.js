import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import HomeScreen from '../HomeScreen';

function WelcomeScreen(props) {
  return (
    <View style={style.Container}>
      <Text style={style.TextTitle}>Welcome to Shop Online</Text>
      <Text style={style.TextContent}>Stay Connected with everyone..!</Text>
      <Text style={style.TextContent}>Sign in with account.!</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('LoginPage')}
        style={style.TouchableOpacity}>
        <Text style={style.Text}>Get Started</Text>
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
  Text: {
    color: '#01ab9d',
    fontWeight: 'bold',
    fontSize: 18,
  },
  TextContent: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  TextTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 40,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
