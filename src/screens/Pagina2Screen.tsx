import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme/appTheme';

//! 15) Creamos el arrowFunction normal
export const Pagina2Screen = () => {
 
  //! 16) Creamos una constante -navigator- que apunta al useNavigation en sustitucion del -navigation- que se optiene por desestructuracion.
  const navigator:any = useNavigation();
  
  return (
      //* Abrimos una View 1 -contendor principal-
    <View style={styles.marginGlobal}>
      {/* //* Generamos un titulo  */}
        <Text style={styles.titleGlobal}>Ventana Numero 2</Text>
        {/* //* Generamos una View 2 -contendor secundario- */}
        <View style={styles.btn_contentH}> 
          {/* //! 17) Creamos un -TouchableOpacity- que servira como btn */} 
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'blue'}}
            //! 18) En el onPress ejecutamos el -navigation.navigate('nomScreen)- ## NO DESESTRUCTURADO ## el cual nos permite ir hacia la Screen indicada. 
            onPress={() => navigator.navigate('Pagina3Screen')}
          >
            {/* //* Generamos el txt del btn */}
            <Text style={{...styles.btn_text, color: 'white'}}>Ir a ventana 3</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
