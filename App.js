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
const HomeStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      options={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        title: 'HomeScreen',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
      name="HomePage"
      component={HomeScreen}
    />
    <HomeStack.Screen
      options={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        title: 'Catagories',
      }}
      name="Catagories"
      component={Catagories}
    />
    <HomeStack.Screen
      options={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        title: 'Shopping Kart List',
      }}
      name="ListItem"
      component={ListItemScreen}
    />
    <HomeStack.Screen
      options={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: '#fff',
        title: 'Specification',
      }}
      name="DetailDesc"
      component={DetailListItemScreen}
    />
  </HomeStack.Navigator>
);

function App(navigation) {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        {/* <Drawer.Screen name="HomePage" component={TabNavigator} /> */}
        <Drawer.Screen name="HomeScreen" component={HomeStackScreen} />
        {/* <Drawer.Screen name="ListItem" component={ListItemStackScreen} /> */}
      </Drawer.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#009387'},
            headerTintColor: '#fff',
            title: 'HomeScreen',
          }}
          name="HomePage"
          component={HomeScreen}
        />
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
      </Stack.Navigator> */}
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
