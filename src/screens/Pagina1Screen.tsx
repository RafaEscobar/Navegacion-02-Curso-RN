import React, { useEffect } from 'react'
import { Text, View,TouchableOpacity, useWindowDimensions } from 'react-native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { styles } from '../theme/appTheme'

interface Props extends DrawerScreenProps<any,any>{};

export const Pagina1Screen = ({navigation}:Props) => {

  const { width } = useWindowDimensions();

   useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Text style={{color:'black'}}>===</Text>
        </TouchableOpacity>
      )
    });
   }, []);
 
  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.titleGlobal}>Ventana Numero 1</Text>
      <View style={styles.btn_contentH}>
        <TouchableOpacity
          style={{...styles.btn, backgroundColor: 'yellow'}}
          onPress={() => navigation.navigate('Pagina2Screen')}
        >
          <Text style={{...styles.btn_text, color:'black'}}>Ir a la ventana 2 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.btn, backgroundColor: 'gray', }}
          onPress={()=> navigation.navigate('Extra', {
            id: 1,
            nombre: 'Rafael',
            apellidos: 'Escobar Gutierrez',
            edad: 22
          })}
        >
          <Text style={styles.btn_text}>Ir a la ventana Extra </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
