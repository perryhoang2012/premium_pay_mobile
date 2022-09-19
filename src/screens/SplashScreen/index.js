import {useNavigation} from '@react-navigation/native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import images from '~assets/images';
import AppFastImage from '~components/AppFastImage';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import constants from '~constants';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  // *
  const navigation = useNavigation();

  //

  const checkNewUser = React.useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('isNewUser');
      if (value) {
        setTimeout(() => {
          navigation.replace('AppDrawer');
        }, 500);
      } else {
        try {
          await AsyncStorage.setItem('isNewUser', 'true');
          setTimeout(() => {
            navigation.replace('WelcomeScreen');
          }, 500);
        } catch (e) {}
      }
    } catch (e) {}
  }, [navigation]);

  // * useEffect
  React.useEffect(() => {
    checkNewUser();
  }, [checkNewUser]);

  // * render
  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <Block style={styles.container}>
        <AppFastImage
          resizeMode="contain"
          source={images.imageIconAppRemove}
          style={styles.logo}
        />
      </Block>
      <Block style={styles.viewTextFooter}>
        <CustomText
          customFont={'Bold'}
          style={styles.textCenter}
          size={24}
          weight={'500'}
          color={Colors.White}
          letterSpacing={4}>
          {constants.NAME_APP}
        </CustomText>
      </Block>
    </LinearGradient>
  );
};

export default SplashScreen;
