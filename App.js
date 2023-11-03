import 'react-native-gesture-handler';
import React, {useEffect, useState, createContext} from 'react';
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
import {PersistanceHelper} from './src/helpers';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const UserContext = createContext();

function HomeStackScreen() {
  return (
    <Stack.Group>
      <Stack.Screen name="HomePage" component={HomeScreen} />
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: '#009387'},
          headerTintColor: '#fff',
          title: 'Catagories',
        }}
        name="Catagories"
        component={Catagories}
      />
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: '#009387'},
          headerTintColor: '#fff',
          title: 'Shopping Kart List',
        }}
        name="ListItem"
        component={ListItemScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: '#009387'},
          headerTintColor: '#fff',
          title: 'Specification',
        }}
        name="DetailDesc"
        component={DetailListItemScreen}
      />
    </Stack.Group>
  );
}

function AuthStackScreen() {
  return (
    <Stack.Group>
      <Stack.Screen name="LoginPage" component={LoginPage} />
    </Stack.Group>
  );
}

function App({navigation}) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={isUserLoggedIn}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          {isUserLoggedIn ? HomeStackScreen() : AuthStackScreen()}
        </Stack.Navigator>
        {/* <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="HomePage" component={TabNavigator} />
        <Drawer.Screen name="HomeScreen" component={HomeStackScreen} />
        <Drawer.Screen name="ListItem" component={ListItemStackScreen} />
      </Drawer.Navigator> */}
      </NavigationContainer>
    </UserContext.Provider>
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
