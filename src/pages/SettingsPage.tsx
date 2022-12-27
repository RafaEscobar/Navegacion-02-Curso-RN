import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

export const SettingsPage = () => {

  const insets = useSafeAreaInsets();

  return (
    <View style={{...styles.marginGlobal, marginTop: insets.top}}>
        <Text style={styles.titleGlobal}>Aqui van los ajustes</Text>
    </View>
  )
}
