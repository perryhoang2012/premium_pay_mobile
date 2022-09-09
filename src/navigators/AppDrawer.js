import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {HomeScreen, SettingScreen, AddressedScreen, UTXOScreen} from '~screens';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContent from './DrawerContent';
import Colors from '~assets/colors';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  const drawerContentOptions = {
    activeBackgroundColor: Colors.Blue_ice,
    activeTintColor: 'white',
    itemStyle: {
      borderBottomWidth: 1,
      borderBottomColor: '#e1e1e1',
      marginVertical: 0,
      padding: 3,
      borderRadius: 0,
    },
    drawerType: 'front',
  };
  return (
    <Drawer.Navigator
      screenOptions={drawerContentOptions}
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="HomeScreen">
      <Drawer.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="AddressedScreen"
        component={AddressedScreen}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="NotificationScreen"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="UTXOScreen"
        component={UTXOScreen}
      />

      <Drawer.Screen
        options={{headerShown: false}}
        name="SettingScreen"
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
}
export default AppDrawer;
