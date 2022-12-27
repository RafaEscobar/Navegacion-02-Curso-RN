import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'

//! 40) Generamos el arrowFucntion desestructurando el -navigation- de los props (para la navegacion), dicha desesturcturacion apunta al -DrawerContentComponentProps-
export const CustomDrawer = ({navigation}: DrawerContentComponentProps) => {
    return (
        //! 41) Envolvemos todo en el -DrawerContentScrollView-
        <DrawerContentScrollView>
            {/* //! 42) Esta primer VIEW contendra todo lo que se busque generar en la parte de arriba del Drawer... ya sea poner una imagen de avatar, un titulo de la app, nombre de usuario, etc  */}
          <View style={styles.draContainerAvatar}>
            {/* //* En este caso estamos colocando una imagen de avatar */}
            <Image 
              source={{
                uri: 'https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318011_960_720.png'
              }}
              style={styles.avatar}
            />
          </View>
          //! 43) Esta segunda VIEW se encargara de contener todas las etiquetas txt de enlace, que se muestran en el Drawer
          <View style={styles.draContainer}>
            {/* //* Dichas etiquetas se conforman por un -TouchableOpacity- con un -Text- dentro */}
            <TouchableOpacity 
                style={styles.touchable_route_dra}
                //! 44) Cada -TouchableOpacity- contienen el onPress que ejecuta el -navigation.navigate()- como se hace normalmente
                onPress={() => navigation.navigate('StackNavigator')}
            >
                <Text style={styles.txt_route_dra}>Navegación de Stack</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.touchable_route_dra}
                onPress={() => navigation.navigate('SettingsPage')}
            >
                <Text style={styles.txt_route_dra}>Ajustes</Text>
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
      )
}
