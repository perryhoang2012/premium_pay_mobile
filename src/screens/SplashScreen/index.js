import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import images from '~assets/images';
import AppFastImage from '~components/AppFastImage';
import styles from './styles';
import constant from '~constant';

const SplashScreen = () => {
  // *
  const navigation = useNavigation();

  //

  // * useEffect
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomTabNavigator');
    }, 500);
  }, [navigation]);

  // * render
  return (
    <View style={styles.container}>
      <AppFastImage
        resizeMode="contain"
        source={images.logo_remove}
        style={styles.logo}
      />
    </View>
  );
};

export default SplashScreen;
