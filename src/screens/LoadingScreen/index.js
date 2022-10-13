import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import Block from '~components/Block';
import Header from '~components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomText from '~components/CustomText';
import CustomInput from '~components/CustomInput';
import {pxScale} from '~utils/funcHelper';
import CustomButton from '~components/CustomButton';
import Insets from '~utils/insets';
import AppFastImage from '~components/AppFastImage';
import images from '~assets/images';
import LottieView from 'lottie-react-native';
import json from '~assets/json';
import {useSelector} from 'react-redux';

const LoadingScreen = () => {
  const [step, setStep] = React.useState(1);

  const route = useRoute();

  const {screen, title} = route.params;
  const token = useSelector(rootState => rootState?.token);

  const navigation = useNavigation();

  useEffect(() => {
    if (screen === 'CreateWalletScreen') {
      if (token.length > 0) {
        setStep(2);
      }
    }
  }, [navigation, screen, token.length]);

  const handleButtonDone = React.useCallback(() => {
    if (screen === 'CreateWalletScreen') {
      if (token.length > 0) {
        navigation.replace('AppDrawer');
      }
    }
  }, [navigation, screen, token.length]);

  return (
    <LinearGradient
      colors={[
        Colors.Gradient_start_2,
        Colors.Gradient_end,
        Colors.Gradient_end,
      ]}
      style={styles.linearGradient}>
      {step === 1 && (
        <Block
          middle
          center
          style={[styles.body, {marginTop: Insets.TOP + 10}]}>
          <CustomText
            bold
            size={24}
            weight={'700'}
            color={Colors.White}
            letterSpacing={2}>
            FAHRENHEIT
          </CustomText>
          <Block flex center middle style={{width: '100%'}}>
            <Block
              flex
              style={{
                width: 274,
                height: 274,
                position: 'absolute',
                top: 120,
              }}>
              <AppFastImage
                source={images.imageLogo2}
                width={274}
                height={274}
              />
            </Block>

            <Block
              style={{
                width: 150,
                height: 150,
                position: 'absolute',
                top: 400,
              }}>
              <LottieView
                source={json.loading}
                autoPlay
                loop
                resizeMode="cover"
              />
            </Block>
            <CustomText
              bold
              size={20}
              weight={'700'}
              color={Colors.White}
              style={{position: 'absolute', top: 550}}>
              Loading
            </CustomText>
          </Block>
        </Block>
      )}

      {step === 2 && (
        <Block
          middle
          center
          style={[styles.body, {marginTop: Insets.TOP + 10}]}>
          <CustomText
            bold
            size={24}
            weight={'700'}
            color={Colors.White}
            letterSpacing={2}>
            FAHRENHEIT
          </CustomText>
          <Block flex center middle style={{width: '100%'}}>
            <Block
              center
              middle
              flex
              style={{
                width: 274,
                height: 274,
                position: 'absolute',
                top: 120,
              }}>
              <AppFastImage
                source={images.imageMegaPhone}
                width={274}
                height={274}
              />
              <CustomText
                bold
                size={20}
                weight={'700'}
                color={Colors.White}
                style={{textAlign: 'center', width: '90%'}}>
                {title}
              </CustomText>
            </Block>

            <Block
              middle
              center
              style={{
                position: 'absolute',
                bottom: 100,
                width: '100%',
                height: 40,
                borderRadius: 10,
              }}>
              <CustomButton
                middle
                center
                onPress={() => handleButtonDone()}
                style={{
                  backgroundColor: Colors.White,
                  position: 'absolute',
                  height: 40,
                  borderRadius: 10,
                  width: '80%',
                }}>
                <CustomText bold size={16} weight={'700'}>
                  Done
                </CustomText>
              </CustomButton>
            </Block>
          </Block>
        </Block>
      )}
    </LinearGradient>
  );
};

export default LoadingScreen;
