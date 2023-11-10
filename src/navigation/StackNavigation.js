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
import MaterialIconsCom from 'react-native-vector-icons/MaterialCommunityIcons';
import {UserContextProvider, useUserContext} from '../contexts/UserContext';
import styles from '../container/ListItemScreen/styles';
import {Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart} from '../features/cart/cartSlice';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const {isLogin} = useUserContext();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
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
            headerRight: () => (
              <MaterialIconsCom
                style={style.MaterialCart}
                name="cart-remove"
                onPress={() => {
                  dispatch(clearCart());
                }}
              />
            ),
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
      {isAuthenticated ? HomeStackScreen() : AuthStackScreen()}
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
