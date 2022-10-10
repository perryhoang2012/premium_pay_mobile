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
import {useDispatch} from 'react-redux';
import {setActiveDrawer} from '~redux/actions/ui';
import {useSelector} from 'react-redux';

const SplashScreen = () => {
  // *
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const token = useSelector(rootState => rootState?.token);

  //

  const checkNewUser = React.useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('isNewUser');
      if (value && token.length > 0) {
        dispatch(setActiveDrawer(1));
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
  }, [dispatch, navigation, token.length]);

  // * useEffect
  React.useEffect(() => {
    checkNewUser();
  }, [checkNewUser]);

  // * render
  return (
    <LinearGradient
      colors={[Colors.Gradient_end, Colors.Gradient_start]}
      style={styles.linearGradient}>
      <Block style={styles.container}>
        <AppFastImage source={images.imageIconAppRemove} style={styles.logo} />
      </Block>
      <Block style={styles.viewTextFooter}>
        <CustomText
          customFont={'Bold'}
          style={styles.textCenter}
          size={24}
          weight={'700'}
          color={Colors.White}
          letterSpacing={4}>
          {constants.NAME_APP}
        </CustomText>
      </Block>
    </LinearGradient>
  );
};

export default SplashScreen;
