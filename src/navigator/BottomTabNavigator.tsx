import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Pagina1TabScreen } from '../screens/Pagina1TabScreen';
import { Pagina2TabScreen } from '../screens/Pagina2TabScreen';
import { StackNavigator } from './StackNavigator';

//! 1) Generamos la constante TAB que apunta al -createBottomTabNavigator- para poder generar el BottomTab
const Tab = createBottomTabNavigator();
//* Generamos el arrowFunction
export const BottomTabNavigator = () => {
  return (
    //! 2) Abrimos el -Tab.Navigator-
    <Tab.Navigator>
      {/* //! 3) Generamos las Tab.Screen's en base al numero de Screens que queramos en el Tab */}
      <Tab.Screen name='Pagina1TabScreen'  component={Pagina1TabScreen}/>
      <Tab.Screen name='Pagina2TabScreen' component={Pagina2TabScreen}/>
      {/* //! 4) En esta Screen llamamos al StackNavigator como si fuera una Screen sola, para poder acceder a esa navegacion */}
      {/* //* Quitamos de esta Screen el header del BottomTab para que no se duplique con el del Stack */}
      <Tab.Screen name='StackNavigator' options={{ headerShown:false }} component={StackNavigator}/>
    </Tab.Navigator>
  )
}
