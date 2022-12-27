import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'


export const CustomDrawer = ({navigation}: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
          <View style={styles.draContainerAvatar}>
            <Image 
              source={{
                uri: 'https://cdn.pixabay.com/photo/2021/06/07/13/46/user-6318011_960_720.png'
              }}
              style={styles.avatar}
            />
          </View>
          <View style={styles.draContainer}>
            <TouchableOpacity 
                style={styles.touchable_route_dra}

                onPress={() => navigation.navigate('BottomTabNavigator')}
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
