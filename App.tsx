import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './src/navigator/DrawerNavigator';

export const App = () => {
  return (
    //! 1) Cuando usamos cualquier tipo de navegacion debemos envolver el todo en un <NavigationContainer>
      <NavigationContainer>
        {/* //! 2) Llamamos a nuestro componente principal >>> En este caso al -StackNavigator- */}
        {/* <StackNavigator /> */}

        {/* //! 3) Al generar un Drawer es necesarios sustituir el llamado al Stack por el del Drawer, ya que en cierto enlace del propio Drawer debe yacer el Stack */}
        <DrawerNavigator />
      </NavigationContainer>
  );
};
 