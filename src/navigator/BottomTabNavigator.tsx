import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Pagina1TabScreen } from '../screens/Pagina1TabScreen';
import { Pagina2TabScreen } from '../screens/Pagina2TabScreen';
import { StackNavigator } from './StackNavigator';
import { tabColor, paletColor } from '../theme/appTheme';

//! 1) Generamos la constante TAB que apunta al -createBottomTabNavigator- para poder generar el BottomTab
const Tab = createBottomTabNavigator();
//* Generamos el arrowFunction
export const BottomTabNavigator = () => {
  return (
    //! 2) Abrimos el -Tab.Navigator-
    <Tab.Navigator
    sceneContainerStyle={{
      backgroundColor: paletColor.neutral
    }}
      screenOptions={{
        tabBarActiveTintColor: tabColor.tertiary,
        tabBarInactiveTintColor: tabColor.primary,
        tabBarLabelStyle:{ fontSize: 12 },
        
        tabBarStyle:{ borderTopWidth: 0 , elevation: 0 },
        // tabBarShowLabel: false,
        
      }}
      
    >
      {/* //! 3) Generamos las Tab.Screen's en base al numero de Screens que queramos en el Tab */}
      <Tab.Screen name='Pagina1TabScreen' options={{ title: 'Pagina 1' }} component={Pagina1TabScreen}/>
      <Tab.Screen name='Pagina2TabScreen' options={{ title: 'Pagina 2' }} component={Pagina2TabScreen}/>
      {/* //! 4) En esta Screen llamamos al StackNavigator como si fuera una Screen sola, para poder acceder a esa navegacion */}
      {/* //* Quitamos de esta Screen el header del BottomTab para que no se duplique con el del Stack */}
      <Tab.Screen name='StackNavigator' options={{ headerShown:false, title: 'Stack' }} component={StackNavigator}/>
    </Tab.Navigator>
  )
}
