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
  SettingNotificationScreen,
  NodeScreen,
  PrivacyScreen,
  CreateNewWallet,
  SettingFaceIdScreen,
  SplashScreen,
  WelcomeScreen,
  RestoreWalletScreen,
  ChangePasswordScreen,
  FacBrowserScreen,
  AddANetworkScreen,
  ImportFromSeenScreen,
  LoadingScreen,
} from '~screens';
import AppDrawer from './AppDrawer';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          // animation: 'none',
          animationTypeForReplace: 'pop',
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="CreateNewWallet" component={CreateNewWallet} />
        <Stack.Screen
          name="RestoreWalletScreen"
          component={RestoreWalletScreen}
        />

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
          name="SettingNotificationScreen"
          component={SettingNotificationScreen}
        />
        <Stack.Screen name="NodeScreen" component={NodeScreen} />
        <Stack.Screen name="PrivacyScreen" component={PrivacyScreen} />
        <Stack.Screen
          name="SettingFaceIdScreen"
          component={SettingFaceIdScreen}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
        />
        <Stack.Screen name="FacBrowserScreen" component={FacBrowserScreen} />
        <Stack.Screen name="AddANetworkScreen" component={AddANetworkScreen} />
        <Stack.Screen
          name="ImportFromSeenScreen"
          component={ImportFromSeenScreen}
        />
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
