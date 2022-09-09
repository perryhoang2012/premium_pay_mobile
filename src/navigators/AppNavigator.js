import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityIndicator} from 'react-native';
import {HomeScreen, CreateNewWallet, WelcomeScreen} from '~screens';
import AppDrawer from './AppDrawer';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <Stack.Navigator
        initialRouteName="AppDrawer"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="CreateNewWallet" component={CreateNewWallet} /> */}
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
