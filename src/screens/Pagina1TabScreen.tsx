import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

//! 5) Creamos la Screen #1 del BottomTab
export const Pagina1TabScreen = () => {
  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.titleGlobal}>BotttomTab Pagina #1</Text>
    </View>
  )
}
