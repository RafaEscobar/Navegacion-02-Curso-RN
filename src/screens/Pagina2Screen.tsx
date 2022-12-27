import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {
 
  const navigator:any = useNavigation();
  
  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.titleGlobal}>Ventana Numero 2</Text>
        <View style={styles.btn_contentH}> 
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: 'blue'}}
            onPress={() => navigator.navigate('Pagina3Screen')}
          >
            <Text style={{...styles.btn_text, color: 'white'}}>Ir a ventana 3</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
