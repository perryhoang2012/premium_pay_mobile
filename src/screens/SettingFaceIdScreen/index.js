import {View, Text, Switch, ImageBackground} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import Header from '~components/Header';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import constants from '~constants';
import {pxScale} from '~utils/funcHelper';
import CustomButton from '~components/CustomButton';
import images from '~assets/images';
import AppFastImage from '~components/AppFastImage';
import ButtonGradient from '~components/ButtonGradient';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';

const SettingFaceIdScreen = () => {
  const [check, setCheck] = React.useState(false);
  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <ImageBackground
        source={images.imageBackgroundFaceId}
        resizeMode="cover"
        style={styles.image}>
        <AppFastImage
          source={images.imageScanning}
          style={{
            width: pxScale.wp(270),
            height: pxScale.hp(360),
            position: 'absolute',
            top: 170,
            left: 50,
          }}
        />
        <Block middle row style={{width: '100%', marginBottom: pxScale.hp(20)}}>
          <CustomButton onPress={() => setCheck(pre => !pre)}>
            <AppSvg
              source={check ? AppIcon.iconSelect : AppIcon.iconNoSelect}
              width={20}
              height={20}
            />
          </CustomButton>
          <CustomText
            color={Colors.White}
            size={16}
            weight={'500'}
            style={{marginLeft: pxScale.wp(10)}}>
            You’re all set!
          </CustomText>
        </Block>
        <CustomText
          size={14}
          weight={'400'}
          color={Colors.White}
          style={{marginBottom: pxScale.hp(10), width: '90%'}}>
          You successfully identifed your documents and you can now proceed to
          order Premium Pay Card
        </CustomText>
        <ButtonGradient
          onGradient
          middle
          center
          style={{
            width: pxScale.wp(260),
            height: pxScale.hp(40),
            marginRight: pxScale.wp(20),
            borderRadius: pxScale.wp(50),
            marginBottom: pxScale.hp(50),
          }}>
          <CustomText color={Colors.White} size={16} weight={'500'}>
            Proceed to ordering card
          </CustomText>
        </ButtonGradient>
      </ImageBackground>
    </LinearGradient>
  );
};

export default SettingFaceIdScreen;
