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

const Drawer = createDrawerNavigator();
const ListItemStack = createNativeStackNavigator();
const DetailListStack = createNativeStackNavigator();

const ListItemStackScreen = ({navigation}) => (
  <ListItemScreen.Navigator>
    <ListItemStack.Screen
      options={{title: 'Shopping Kart List'}}
      name="ListItem"
      component={ListItemScreen}
    />
  </ListItemScreen.Navigator>
);

const DetailListStackScreen = ({navigation}) => (
  <DetailListStack.Navigator>
    <DetailListStack.Screen
      options={{title: 'Shopping Kart List'}}
      name="DetailDesc"
      component={DetailListItemScreen}
    />
  </DetailListStack.Navigator>
);

function App(navigation) {
  return (
    <NavigationContainer style={style.container}>
      <Drawer.Navigator>
        <Drawer.Screen name="HomePage" component={TabNavigator} />
        <Drawer.Screen name="WelcomePage" component={WelcomeScreen} />
        <Drawer.Screen name="ListItem" component={ListItemScreen} />
        <Drawer.Screen name="DetailDesc" component={DetailListItemScreen} />
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
