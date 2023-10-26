import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  ListItemScreen,
  DetailListItemScreen,
  LoginPage,
  WelcomeScreen,
  Catagories,
} from './src';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Catagories" component={Catagories} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} /> */}
    </Tab.Navigator>
  );
}

function App(navigation) {
  return (
    <NavigationContainer style={style.container}>
      <Drawer.Navigator>
        <Drawer.Screen name="LoginPage" component={LoginPage} />
        <Drawer.Screen name="ListItem" component={ListItemScreen} />
      </Drawer.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          options={{title: 'Shopping'}}
          name="LoginPage"
          component={LoginPage}
        />
        <Stack.Screen
          options={{title: 'Shopping Kart'}}
          name="WelcomePage"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{title: 'Shopping Kart List'}}
          name="ListItem"
          component={ListItemScreen}
        />
        <Stack.Screen
          options={{title: 'Specification'}}
          name="DetailDesc"
          component={DetailListItemScreen}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
