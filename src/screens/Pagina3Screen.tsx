import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{};

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.titleGlobal}>Ventana Numero 3</Text>
        <View style={{  width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            style={{...styles.btn, marginBottom: 15}}
            onPress={() => navigation.pop()}
          >
            <Text style={styles.btn_text}>Regeresar con POP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{...styles.btn, marginBottom: 15}}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btn_text}>Regresar con GoBack</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.btn, marginBottom: 15}}
            onPress={() => navigation.popToTop()}
          >
            <Text style={styles.btn_text}>Regresar al home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{...styles.btn, marginBottom: 15}}
            onPress={() => navigation.replace('Extra')}
          >
            <Text style={styles.btn_text}>Reemplazar</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
