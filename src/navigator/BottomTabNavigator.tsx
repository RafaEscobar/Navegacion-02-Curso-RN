import React from 'react'
//? Screens
import { Pagina1TabScreen } from '../screens/Pagina1TabScreen';
import { Pagina2TabScreen } from '../screens/Pagina2TabScreen';
import { StackNavigator } from './StackNavigator';
//? appTheme
import { paletColor } from '../theme/appTheme';
//? Componentes
import { Text } from 'react-native';
//? hooks y creates
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//! 1) Generamos la constante TAB que apunta al -createMaterialBottomTabNavigator- para poder generar el BottomTab
const Tab = createMaterialBottomTabNavigator();

//* Generamos el arrowFunction
export const BottomTabNavigator = () => {
  return (
    //! 2) Abrimos el -Tab.Navigator-
    <Tab.Navigator
    //* Esta propiedad otorga una animacion de transicion sueva al darl clic en los Tabs
    sceneAnimationEnabled={true}
    //* Color de fondo de la caja del Tabs
    barStyle={{backgroundColor: paletColor.neutral}}
    //* Color activo e inactivo
    activeColor='blue'
    inactiveColor='gray'
    //! 3) ###### 
      screenOptions={
        ({route}) => ({
                
        tabBarIcon: ({ color, focused }) => {
          
          let my_icon;

          switch(route.name){
            case 'Pagina1TabScreen': 
              my_icon = 'P1';
            break;
            case 'Pagina2TabScreen': 
              my_icon = 'P2';
            break;
            case 'StackNavigator':
              my_icon = 'St';
            break;
          }
          
          return <Text style={{color}}>{my_icon}</Text>
        }
        
      })}
      
    >
      {/* //! 4) Generamos las Tab.Screen's en base al numero de Screens que queramos en el Tab */}
      <Tab.Screen name='Pagina1TabScreen' component={Pagina1TabScreen}/>
      <Tab.Screen name='Pagina2TabScreen' component={Pagina2TabScreen}/>
      {/* //! 5) En esta Screen llamamos al StackNavigator como si fuera una Screen sola, para poder acceder a esa navegacion */}
      {/* //* Quitamos de esta Screen el header del BottomTab para que no se duplique con el del Stack */}
      <Tab.Screen name='StackNavigator' options={{ title: 'Stack' }} component={StackNavigator}/>
    </Tab.Navigator>
  )
}
