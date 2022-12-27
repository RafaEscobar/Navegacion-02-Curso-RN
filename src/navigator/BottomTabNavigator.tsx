import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Pagina1TabScreen } from '../screens/Pagina1TabScreen';
import { Pagina2TabScreen } from '../screens/Pagina2TabScreen';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Pagina1TabScreen'  component={Pagina1TabScreen}/>
      <Tab.Screen name='Pagina2TabScreen' component={Pagina2TabScreen}/>
      <Tab.Screen name='StackNavigator' options={{ headerShown:false }} component={StackNavigator}/>
    </Tab.Navigator>
  )
}
