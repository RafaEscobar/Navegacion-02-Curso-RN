import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

//! 13) Creamos la Screen #1 del Top
export const Pagina1TopScreen = () => {
  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.titleGlobal}>NUMERO #1</Text>
    </View>
  )
}
