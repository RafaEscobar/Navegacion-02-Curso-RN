import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

//! 7) Creamos la Screen #2 del BottomTab
export const Pagina2TabScreen = () => {
  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.titleGlobal}>BotttomTab Pagina #2</Text>
    </View>
  )
}
