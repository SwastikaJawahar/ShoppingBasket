import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  LoginPage,
  Catagories,
  ListItemScreen,
  DetailListItemScreen,
  ProfileScreen,
  SignUpPage,
  CartScreen,
} from '../index';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {UserContextProvider, useUserContext} from '../contexts/UserContext';
import styles from '../container/ListItemScreen/styles';
import {Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const navigation = useNavigation();
  const {isLogin} = useUserContext();

  function HomeStackScreen() {
    return (
      <Stack.Group>
        {/* <Stack.Screen
          name="CounterReduxScreen"
          component={CounterReduxScreen}
        /> */}
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
            title: 'CartScreen',
          }}
          name="CartScreen"
          component={CartScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: {backgroundColor: '#009387'},
            headerTintColor: '#fff',
            title: 'Shopping Kart List',
            headerRight: () => (
              <MaterialIcons
                style={style.MaterialCart}
                name="add-shopping-cart"
                onPress={() => {
                  navigation.navigate('CartScreen');
                }}
              />
            ),
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
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
      </Stack.Group>
    );
  }
  return (
    <Stack.Navigator>
      {isLogin ? HomeStackScreen() : AuthStackScreen()}
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

const style = StyleSheet.create({
  MaterialCart: {
    fontSize: 30,
  },
});
export {MainStackNavigator, ProfileStack};
