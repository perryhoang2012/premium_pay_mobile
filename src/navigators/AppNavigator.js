import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ActivityIndicator} from 'react-native';
import {
  HomeScreen,
  SendScreen,
  ReceiveScreen,
  TransactionDetailScreen,
  UtilitiesScreen,
  PaymentProofVerificationScreen,
  SettingGeneralScreen,
  NotificationsScreen,
  NodeScreen,
  PrivacyScreen,
  CreateNewWallet,
  SettingFaceIdScreen,
} from '~screens';
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
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SendScreen" component={SendScreen} />
        <Stack.Screen name="ReceiveScreen" component={ReceiveScreen} />
        <Stack.Screen
          name="TransactionDetailScreen"
          component={TransactionDetailScreen}
        />
        <Stack.Screen name="UtilitiesScreen" component={UtilitiesScreen} />
        <Stack.Screen
          name="PaymentProofVerificationScreen"
          component={PaymentProofVerificationScreen}
        />
        <Stack.Screen
          name="SettingGeneralScreen"
          component={SettingGeneralScreen}
        />
        <Stack.Screen
          name="NotificationsScreen"
          component={NotificationsScreen}
        />
        <Stack.Screen name="NodeScreen" component={NodeScreen} />
        <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
        <Stack.Screen name="CreateNewWallet" component={CreateNewWallet} />
        <Stack.Screen
          name="SettingFaceIdScreen"
          component={SettingFaceIdScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
