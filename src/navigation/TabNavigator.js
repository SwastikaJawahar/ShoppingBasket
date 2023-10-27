import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../container/HomeScreen/index.js';
import WelcomeScreen from '../container/WelcomeScreen/index.js';
import Catagories from '../container/Catagories/index.js';
import ProfileScreen from '../container/ProfileScreen/index.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="HomePage" component={HomeScreen} />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={WelcomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="home-outline"
              type="AntDesign"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Catagories"
        component={Catagories}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
