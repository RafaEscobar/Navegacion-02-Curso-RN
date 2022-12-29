import React from 'react'
//? Screens
import { Pagina1TabScreen } from '../screens/Pagina1TabScreen';
import { StackNavigator } from './StackNavigator';
//? appTheme
import { paletColor } from '../theme/appTheme';
//? Componentes
//? hooks y creates
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import Icon  from 'react-native-vector-icons/Ionicons';

//! 1) Generamos la constante TAB que apunta al -createMaterialBottomTabNavigator- para poder generar el BottomTab
const Tab = createMaterialBottomTabNavigator();

//* Generamos el arrowFunction
export const BottomTabNavigator = () => {
  return (
    //! 2) Abrimos el -Tab.Navigator-
    <Tab.Navigator
    
      //* Esta propiedad otorga una animacion de transicion sueva al darl clic en los Tabs
      sceneAnimationEnabled={true}
      //*¨Se oculta el label hasta tocar el icono 
      shifting={true}
      //* Color de fondo de la caja del Tabs
      barStyle={{backgroundColor: paletColor.neutral, height: 70}}
      //* Color activo e inactivo
      activeColor='blue'
      inactiveColor='gray'
          
      //! 3) ###### 
        screenOptions={
          ({route}) => ({
            tabBarIcon: ({ color }) => {

              let my_icon='';
            
              switch(route.name){
                case 'Pagina1TabScreen': 
                  my_icon = 'document-outline';
                break;
                case 'TopTap': 
                  my_icon = 'ellipsis-horizontal-outline';
                break;
                case 'StackNavigator':
                  my_icon = 'layers-outline';
                break;
              }

              return <Icon name={my_icon} size={20} color={color} />
            }
      })}
    >
      {/* //! 4) Generamos las Tab.Screen's en base al numero de Screens que queramos en el Tab */}
      <Tab.Screen name='Pagina1TabScreen' options={{ tabBarLabel: 'Pagina 1' }} component={Pagina1TabScreen}/>
      {/* //! 16) Llamamos al TopTaoNavigator en esta Tab.Screen */}
      <Tab.Screen name='TopTap' options={{ tabBarLabel: 'TopTap' }} component={TopTabNavigator}/>
      {/* //! 5) En esta Screen llamamos al StackNavigator como si fuera una Screen sola, para poder acceder a esa navegacion */}
      {/* //* Quitamos de esta Screen el header del BottomTab para que no se duplique con el del Stack */}
      <Tab.Screen name='StackNavigator' options={{ tabBarLabel: 'Stack' }} component={StackNavigator}/>
    </Tab.Navigator>
  )
}
