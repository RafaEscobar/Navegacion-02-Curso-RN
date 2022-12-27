import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsPage } from '../pages/SettingsPage';
import { useWindowDimensions } from 'react-native';
import { CustomDrawer } from './CustomDrawer';
import { BottomTabNavigator } from './BottomTabNavigator';

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
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="SettingsPage" options={{ headerShown: true, title: 'Mis ajustes' }} component={SettingsPage} />
    </Drawer.Navigator>
  );
}
