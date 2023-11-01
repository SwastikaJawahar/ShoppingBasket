import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  ListItemScreen,
  DetailListItemScreen,
  LoginPage,
  WelcomeScreen,
  Catagories,
  HomeScreen,
} from './src';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './src/navigation/TabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

function App(navigation) {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="HomePage" component={TabNavigator} />
        {/* <Drawer.Screen name="HomeScreen" component={HomeStackScreen} /> */}
        {/* <Drawer.Screen name="ListItem" component={ListItemStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
