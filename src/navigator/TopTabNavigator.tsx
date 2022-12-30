import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import Icon  from 'react-native-vector-icons/Ionicons';
import { Pagina1TopScreen } from '../screens/Pagina1TopScreen';
import { Pagina2TopScreen } from '../screens/Pagina2TopScreen';
import { Pagina3TopScreen } from '../screens/Pagina3TopScreen';

//! 10) Generamos la constante TTab que apunta a -createMaterialTopTabNavigator-
const TTab = createMaterialTopTabNavigator();

//* Generamos el arrowFunbction
export const TopTabNavigator = () => {
  return (
    //! 11) Abrimos un TTab.Navigator
    <TTab.Navigator
    //* Asignamos ciertas propiedades segun lo establezcamos....
      screenOptions={
        ({route}) => ({
        //* Color al presionar la screen
        tabBarPressColor: 'blue',
        //* Visivilidad para el Icono
        tabBarShowIcon: true,
        //* Ubicacion -bottom- para el menu de navegacion
        // tabBarPosition: 'bottom',
        //? Estilos para los labels
        tabBarLabelStyle:{
          fontSize: 12,
          fontWeight: 'bold'
        },
        //? Estilos para la linea de indicacion de la Screen
        tabBarIndicatorStyle:{
          backgroundColor: 'black'
        },
        //? Estilos para el menu como caja
        tabBarStyle: {
          borderBottomWidth: 0,
          elevation: 0,
        },
        //? Generacion de icono
        tabBarIcon: ({ color}) => {

          let my_icon='';
        
          switch(route.name){
            case 'Pagina1': 
              my_icon = 'game-controller-outline';
            break;
            case 'Pagina2': 
              my_icon = 'cloudy-night-outline';
            break;
            case 'Pagina3':
              my_icon = 'finger-print-outline';
            break;
          }

          return <Icon name={my_icon} size={25} color={color} />
        }
      })}
      //* Color de fondo para las Screens
      sceneContainerStyle={{ backgroundColor: 'white',  }}
    >
      {/* //! 12) Generamos las TTab.Screen's necesarias */}
        <TTab.Screen name='Pagina1' options={{ tabBarLabel:'Ventana 1' }} component={Pagina1TopScreen}/>
        <TTab.Screen name='Pagina2' options={{ tabBarLabel:'Ventana 2' }} component={Pagina2TopScreen}/>
        <TTab.Screen name='Pagina3' options={{ tabBarLabel:'Ventana 3' }} component={Pagina3TopScreen}/>
    </TTab.Navigator>
  )
}
