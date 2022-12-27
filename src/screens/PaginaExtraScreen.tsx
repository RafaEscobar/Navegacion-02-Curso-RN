import React from 'react'
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

//! 29) Creamos la interface Props que extiende de StackScreenProps
//* El type de este interface es <RootStackParams, 'Extra'> ya que esta Screen si recibe argumentos por parte de otra Screen
//* RootStckParams -> Es el type creado en el archivo StackNavigator para typar los nombres de Screen y los argumentos asi como sus tipos de datos 
//* Extra -> Es el nombre en el Type de la Screen actual
interface Props extends StackScreenProps<RootStackParams, 'Extra'>{};

//! 30) Generamos el arrowFunction desestructurando el {route} que a su ves apunta a la interfaz Props
export const PaginaExtraScreen = ({route}: Props) => {

  //! 31) Creamos una constante -param- que apunta al -route.params- y evitar asi tener que usar esta sintaxis a la hora de usar los argumentos: route.params.argumento1 >>> EVITAMOS ESTO
  const params = route.params;

  return (
    //* Abrimos una View 1 -contendor principal-
    <View style={{backgroundColor: 'yellow'}}>
    {/* //! 32) Mostramos dos textos cuyo contenido proviene de los argumentos -id y nombre- */}
      {/* //* Usamos los argumentos con la siguinte sintaxis: params.nomArgumento */}
        <Text style={{fontSize: 20, color: 'black'}}>ID: {params.id}</Text>
        <Text style={{fontSize: 20, color: 'black'}}>Nombre: {params.nombre}</Text>
    </View>
  )
}
