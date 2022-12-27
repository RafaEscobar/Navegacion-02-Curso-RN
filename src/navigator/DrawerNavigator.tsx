import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsPage } from '../pages/SettingsPage';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { CustomDrawer } from './CustomDrawer';

//! 33) Creamos nuestra constante que apunta al -createDrawerNavigator-
const Drawer = createDrawerNavigator();

//* Generamos nuestra arrowFunction
export const DrawerNavigator = () => {  

  //! 35) Creamos el hook -useWindowDimensions- para poder trabajar con las dimsensiones del dispositivo...
  //* Desestructuramos el width
  const {width} = useWindowDimensions();

  //! 36) Generamos un arrowFunction que nos retornara el valor 'permanet' o 'front' en caso de que el width de nuestro dispositivo se modifique a 'mayor igual' a: 768 de ancho
  const openDra = () => {
    return (width>=768 ? 'permanent' : 'front')
  }

  return (
    //! 37) Abrimos un Drawer.Navigator
    <Drawer.Navigator 
      // Establecemos las opciones: -ocultar la cabecera-, -estado del drawer, llamando a la funcion que nos retornara el valor de dicho estado-
      screenOptions={{ headerShown: false, drawerType: openDra()  }}
      //! 39) Generamos la opcion -drawerContent- para poder customizar el Drawer
      //* Solicitamos props que apuntan al componente <CustomDrawer> ::>> Archivo en donde se genera toda la customizacion del Drawer
      drawerContent= { (props) => <CustomDrawer {...props} /> }
    >
      {/* //! 38) Generamos las Screens que competen al -Drawer- */}
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsPage"  component={SettingsPage} />
    </Drawer.Navigator>
  );
}
