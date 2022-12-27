import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsPage } from '../pages/SettingsPage';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { CustomDrawer } from './CustomDrawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {  

  const {width} = useWindowDimensions();

  const openDra = () => {
    return (width>=768 ? 'permanent' : 'front')
  }

  return (
    <Drawer.Navigator 
      screenOptions={{ headerShown: false, drawerType: openDra()  }}
      drawerContent= { (props) => <CustomDrawer {...props} /> }
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsPage"  component={SettingsPage} />
    </Drawer.Navigator>
  );
}
