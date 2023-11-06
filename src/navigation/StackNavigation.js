import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../container/HomeScreen';
import Catagories from '../container/Catagories';
import ListItemScreen from '../container/ListItemScreen';
import DetailListItemScreen from '../container/DetailListItemScreen';
import ProfileScreen from '../container/ProfileScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = props => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="HomePage" component={HomeScreen} /> */}
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
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, ProfileStack};
