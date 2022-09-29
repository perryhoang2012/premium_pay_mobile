import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import Block from '~components/Block';
import AppFastImage from '~components/AppFastImage';
import images from '~assets/images';
import CustomText from '~components/CustomText';
import constants from '~constants';
import ButtonGradient from '~components/ButtonGradient';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '~components/CustomButton';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const goToCreateWallet = () => {
    navigation.navigate('CreateNewWallet');
  };

  const goToRestoreWalletScreen = () => {
    navigation.navigate('RestoreWalletScreen');
  };

  return (
    <LinearGradient
      colors={[Colors.Gradient_end, Colors.Gradient_start]}
      style={style.linearGradient}>
      <Block style={style.container}>
        <AppFastImage
          resizeMode="contain"
          source={images.imageIconAppRemove}
          style={style.logo}
        />
      </Block>
      <Block style={style.viewTextFooter}>
        <CustomButton
          middle
          center
          style={style.button}
          row
          onPress={() => goToCreateWallet()}>
          <CustomText color={Colors.White} weight={'500'}>
            {constants.I_HAVE_NOT_GOT_A_WALLET}
          </CustomText>
        </CustomButton>
        <CustomButton
          middle
          center
          style={style.button}
          row
          onPress={() => goToRestoreWalletScreen()}>
          <CustomText color={Colors.White} weight={'500'}>
            {constants.RESTORE_WALLET}
          </CustomText>
        </CustomButton>
      </Block>
    </LinearGradient>
  );
};

export default WelcomeScreen;
