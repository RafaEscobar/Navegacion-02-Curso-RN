import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

//* Generamos nuestra arrowFunction 
export const SettingsPage = () => {

  //* Generamos el hook -useSafeAreaInsets- para generar un espacio seguro por separado, para el top, bottom, left y right
  const insets = useSafeAreaInsets();

  return (
    //* En este caso generamos un espacio seguro en el top
    <View style={{...styles.marginGlobal, marginTop: insets.top}}>
        <Text style={styles.titleGlobal}>Aqui van los ajustes</Text>
    </View>
  )
}
