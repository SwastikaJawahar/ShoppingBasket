import 'react-native-gesture-handler';
import React, {useEffect, useState, createContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import store from './src/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistanceHelper} from './src/helpers';
import {MainStackNavigator} from './src/navigation/StackNavigation';
import {UserContextProvider} from './src/contexts/UserContext';
function App() {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <NavigationContainer style={styles.container}>
          <MainStackNavigator />
        </NavigationContainer>
      </UserContextProvider>
    </Provider>
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
