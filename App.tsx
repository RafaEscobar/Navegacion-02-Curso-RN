import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';
import { NativeBaseProvider } from 'native-base';

export const App = () => {
  return (
    //! 0) Envolvemos todo en el -NativeBaseProvider-
    <NativeBaseProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
 