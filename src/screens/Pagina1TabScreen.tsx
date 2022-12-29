import React from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { Box } from 'native-base';

//! 6) Creamos la Screen #1 del BottomTab
export const Pagina1TabScreen = () => {
  return (
    <View style={styles.marginGlobal}>
        <Text style={styles.titleGlobal}>BotttomTab Pagina #1</Text>
        <Box style={{ flexDirection: 'row' }}>
          <Icon name="airplane-outline" size={30} color="#000000" />
          <Icon name="business-outline" size={50} color="#000000" />
        </Box>
    </View>
  )
}