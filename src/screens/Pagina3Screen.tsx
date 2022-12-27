import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

//! 19) Generamos la interface Propos que extiende de StackScreenProps
//* El type es <any, any> ya que esta pantalla no requiere de la recepcion de argumentos, sino solo el trabajo de la navegacion
interface Props extends StackScreenProps<any, any>{};

//! 20) Generamos la arrowFunction con la desestructuracion del -navigation-
//* Dicha desestructuracion apunta a la interfaz Props
export const Pagina3Screen = ({navigation}: Props) => {
  return (
    //* Abrimos una View 1 -contendor principal-
    <View style={styles.marginGlobal}>
        {/* //* Generamos un titulo  */}
        <Text style={styles.titleGlobal}>Ventana Numero 3</Text>
        {/* //* Generamos una View 2 -contendor secundario- */}
        <View style={{  width: '100%', alignItems: 'center'}}>
          {/* //! 21) Creamos un -TouchableOpacity- que servira como btn */}
          <TouchableOpacity
            style={{...styles.btn, marginBottom: 15}}
            //! 22) En el onPress ejecutamos el -navigation.pop- el cual permite regresar a la Screen inmediatamente por detras de la actual. ## POP() ES DE USO EXCULISVO PARA STACK ##
            onPress={() => navigation.pop()}
          >
            {/* //* Generamos el txt del btn */}
            <Text style={styles.btn_text}>Regeresar con POP</Text>
          </TouchableOpacity>

          {/* //! 23) Creamos un -TouchableOpacity- que servira como btn */}
          <TouchableOpacity
            style={{...styles.btn, marginBottom: 15}}
            //! 24) En el onPress ejecutamos el -navigation.goBack- el cual al igual que pop(), nos permite regresar a la Screen inmediatamente por detras de la actual. ## ESTE ES DE USO GENERAL TANTO PARA DRAWER COMO PARA STACK## 
            onPress={() => navigation.goBack()}
          >
            {/* //* Generamos el txt del btn */}
            <Text style={styles.btn_text}>Regresar con GoBack</Text>
          </TouchableOpacity>
          {/* //! 25) Creamos un -TouchableOpacity- que servira como btn */}
          <TouchableOpacity
            style={{...styles.btn, marginBottom: 15}}
            //! 26) En el onPress ejectutamos el -navigation.popToTop- el cual nos lleva hasta la Screen principal del Stack
            onPress={() => navigation.popToTop()}
          >
            {/* //* Generamos el txt del btn */}
            <Text style={styles.btn_text}>Regresar al home</Text>
          </TouchableOpacity>
          {/* //! 27) Creamos un -TouchableOpacity- que servira como btn */}
          <TouchableOpacity
            style={{...styles.btn, marginBottom: 15}}
            //! 28) En el onPress ejecutamos el -navigation.replace- el cual reemplazara la Screen actual con la especificada.
            onPress={() => navigation.replace('Extra')}
          >
            {/* //* Generamos el txt del btn */}
            <Text style={styles.btn_text}>Reemplazar</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
