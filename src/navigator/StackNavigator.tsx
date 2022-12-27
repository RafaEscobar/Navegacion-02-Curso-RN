import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

//! 3) Importamos todas las Screens a utilizar
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PaginaExtraScreen } from '../screens/PaginaExtraScreen';

//! 4) Creamos el type que fungira como -interface- para las Screens y los argumentos que reciben
export type RootStackParams = {
  //* Se especifica el nombre con el que se especificaran las Screens
  //* Se especifica si recibira o no argumentos
    //? Si recibe argumentos se especifica cuales y de que tipo
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  Extra: { id: number, nombre: string, }
}

//! 5) Creamos el createStackNavigator con type <RootStackParams>
const Stack =  createStackNavigator<RootStackParams>();

//! 6) Generamos el arrowFunction
export const StackNavigator = () => {  
  return (
    //! 7) Abrimos un Stack.Navigator -Especificamos sus propiedades en caso de ser necesario...-
    <Stack.Navigator
      //* Podemos especificar cual Screen debe arrancar como la principal, de no especificarse tomara la primera 
      initialRouteName='Pagina1Screen'
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white'
        },
        
      }}
    >
      {/* //! 8) Generamos las Stack.Screen  */}
      {/* //* Los name='' deben hacer mencion de Screen que se encuentren en el -typr- */}
      {/* //* Los component={} deben hacer alucion a Screen importadas */}
        <Stack.Screen name='Pagina1Screen' options={{ title:'Pagina 1' }} component={Pagina1Screen}/>
        <Stack.Screen name='Pagina2Screen' options={{ title:'Pagina 2' }} component={Pagina2Screen}/>
        <Stack.Screen name='Pagina3Screen' options={{ title:'Pagina 3' }} component={Pagina3Screen}/>
        <Stack.Screen name='Extra' options={{ title:'Pagina extra' }} component={PaginaExtraScreen}/>
    </Stack.Navigator>
  )
}
