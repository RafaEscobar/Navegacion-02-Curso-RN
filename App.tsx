import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';

export const App = () => {
  return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
  );
};
 