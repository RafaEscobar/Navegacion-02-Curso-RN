import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';

//! 14) Creamos la Screen #2 del Top
export const Pagina2TopScreen = () => {
  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.titleGlobal}>NUMERO #2</Text>
    </View>
  )
}
