import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { Text } from 'react-native';
import { Pagina1TopScreen } from '../screens/Pagina1TopScreen';
import { Pagina2TopScreen } from '../screens/Pagina2TopScreen';
import { Pagina3TopScreen } from '../screens/Pagina3TopScreen';

const TTab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <TTab.Navigator
      screenOptions={
        ({route}) => ({

        tabBarPressColor: 'blue',
        tabBarShowIcon: true,
        // tabBarPosition: 'bottom',

        tabBarIndicatorStyle:{
          backgroundColor: 'black'
        },
        tabBarStyle: {
          borderBottomWidth: 0,
          elevation: 0
        },
        tabBarIcon: ({ color, focused }) => {

          let my_icon;
        
          switch(route.name){
            case 'Pagina1': 
              my_icon = 'P1';
            break;
            case 'Pagina2': 
              my_icon = 'P2';
            break;
            case 'Pagina3':
              my_icon = 'P3';
            break;
          }

          return <Text style={{color}}>{my_icon}</Text>
        }
      })}
      
      sceneContainerStyle={{ backgroundColor: 'white',  }}

      
    >
        <TTab.Screen name='Pagina1' component={Pagina1TopScreen}/>
        <TTab.Screen name='Pagina2' component={Pagina2TopScreen}/>
        <TTab.Screen name='Pagina3' component={Pagina3TopScreen}/>
    </TTab.Navigator>
  )
}
