import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileStack} from './StackNavigation';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <DrawerNavigator>
      <Drawer.Screen name="HomePage" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
    </DrawerNavigator>
  );
};

export default DrawerNavigator;
