import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../theme/appTheme'


export const CustomDrawer = ({navigation}: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
          <View style={styles.draContainerAvatar}>
            <Image 
              source={require('../imgs/enojado.png')}
              style={styles.avatar}
            />
          </View>
          <View style={styles.draContainer}>
            <TouchableOpacity
            //* Desestructuramos los estilos para poner la disposicion en filas y que el icono se pude ver al costado de la etiqueta txt de enlace del Drawer
                style={{...styles.touchable_route_dra, flexDirection: 'row'}}
                //! 9) Llamamos a la Screen del Drawer asociada al BottomTab, recien colocada en el paso 7)
                onPress={() => navigation.navigate('BottomTabNavigator')}
            >
              {/* //* Le colocamos un Icono al costado de cada etiqueta txt en el Drawe */}
              <Icon name='navigate-outline' size={25} color='#000000' style={{marginRight: 10}} />
                <Text style={styles.txt_route_dra}>Navegación de Stack</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{...styles.touchable_route_dra, flexDirection: 'row'}}
                onPress={() => navigation.navigate('SettingsPage')}
            >
              {/* //* Le colocamos un Icono al costado de cada etiqueta txt en el Drawe */}
              <Icon name='settings-outline' size={25} color='#000000' style={{marginRight: 10}} />
                <Text style={styles.txt_route_dra}>Ajustes</Text>
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
      )
}
