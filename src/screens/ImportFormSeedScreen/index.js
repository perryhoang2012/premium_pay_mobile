import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import Block from '~components/Block';
import Header from '~components/Header';
import {useNavigation} from '@react-navigation/native';
import CustomText from '~components/CustomText';
import CustomInput from '~components/CustomInput';
import {pxScale} from '~utils/funcHelper';
import CustomButton from '~components/CustomButton';
import Insets from '~utils/insets';
import AppFastImage from '~components/AppFastImage';
import images from '~assets/images';
import LottieView from 'lottie-react-native';
import json from '~assets/json';

const ImportFromSeenScreen = () => {
  const navigation = useNavigation();

  const [valueInput, setValueInput] = React.useState('');
  const [error, setError] = React.useState();

  const [step, setStep] = React.useState(1);

  const goBack = () => {
    navigation.goBack();
  };

  const checkValue = () => {
    if (valueInput.length <= 0) {
      setError('Incorrect phrase');
    } else {
      setStep(2);
    }
  };

  React.useEffect(() => {
    if (step === 2) {
      setTimeout(() => {
        setStep(3);
      }, 3000);
    }
  }, [step]);
  return (
    <LinearGradient
      colors={[
        Colors.Gradient_start_2,
        Colors.Gradient_end,
        Colors.Gradient_end,
      ]}
      style={styles.linearGradient}>
      {step === 1 && (
        <>
          <Header
            title={'IMPORT FROM SEEN'}
            goBack={goBack}
            styleTitle={styles.textTitle}
          />
          <Block style={styles.body}>
            <CustomText semiBold size={14} weight={'600'} color={Colors.White}>
              SECRET RECOVERY PHRASE
            </CustomText>
            <CustomInput
              placeholder={'Enter your secret recovery phrase'}
              value={valueInput}
              onChangeText={e => setValueInput(e)}
              style={{
                marginTop: pxScale.hp(10),
                borderRadius: 6,
                backgroundColor: Colors.Background_button,
                height: pxScale.hp(48),
                paddingLeft: pxScale.wp(15),
                color: Colors.White,
                borderColor:
                  error?.length > 0 ? Colors.Error : Colors.Background_button,
                borderWidth: 1,
              }}
            />
            {error?.length > 0 && (
              <CustomText
                color={Colors.Error}
                size={16}
                regular
                style={{marginTop: 4}}>
                {error}
              </CustomText>
            )}
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
              onPress={() => checkValue()}
              style={{
                backgroundColor: Colors.White,
                position: 'absolute',
                height: 40,
                borderRadius: 10,
                width: '80%',
              }}>
              <CustomText bold size={16} weight={'700'}>
                Import
              </CustomText>
            </CustomButton>
          </Block>
        </>
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

      {step === 3 && (
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
                You have successfully Import a wallet
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
                onPress={() => navigation.replace('AppDrawer')}
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
          {/* <Block>
          
          </Block>
         */}
        </Block>
      )}
    </LinearGradient>
  );
};

export default ImportFromSeenScreen;
