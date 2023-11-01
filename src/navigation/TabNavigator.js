import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../container/HomeScreen/index.js';
import WelcomeScreen from '../container/WelcomeScreen/index.js';
import Catagories from '../container/Catagories/index.js';
import ProfileScreen from '../container/ProfileScreen/index.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../container/LoginPage/index.js';
import ListItemScreen from '../container/ListItemScreen/index.js';
import DetailListItemScreen from '../container/DetailListItemScreen/index.js';
import {createStackNavigator} from 'react-navigation/stack';

const Tab = createBottomTabNavigator();
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
          <Ionicons.Button
            name="menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}></Ionicons.Button>
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

const WelcomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      {/* <Stack.Screen name="HomePage" component={HomeScreen} /> */}
      <Stack.Screen name="LoginPage" component={LoginPage} />
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
        name="HomePage1"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="layers" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
