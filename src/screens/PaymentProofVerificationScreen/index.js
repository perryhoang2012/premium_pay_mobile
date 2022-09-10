import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import Header from '~components/Header';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import constants from '~constants';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';
import {useNavigation} from '@react-navigation/native';

const PaymentProofVerificationScreen = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <Header title={'Payment Proof Verification'} goBack={goBack} />
      <Block style={styles.body}>
        <Block row middle style={styles.viewStatus}>
          <Block style={styles.gradientDot} />
          <CustomText
            color={Colors.Gray}
            weight={'500'}
            size={16}
            style={styles.textStatus}>
            {constants.ONLINE}
          </CustomText>
        </Block>
        <Block style={styles.viewKeyCode}>
          <Block>
            <CustomText
              color={Colors.White}
              size={15}
              weight={'500'}
              letterSpacing={1}>
              {constants.KEY_CODE}
            </CustomText>
            <CustomText
              color={Colors.White}
              weight={'400'}
              style={styles.textMarginTop}>
              3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko
            </CustomText>
          </Block>
        </Block>
        <Block style={styles.viewKeyCode}>
          <Block>
            <Block row space="between" center>
              <CustomText
                color={Colors.White}
                size={16}
                weight={'500'}
                letterSpacing={1}>
                {constants.PAYMENT_PROOF}
              </CustomText>
              <AppSvg source={AppIcon.iconDropDown} width={14} height={14} />
            </Block>
            <Block>
              <CustomText
                color={Colors.Gray}
                size={15}
                weight={'500'}
                letterSpacing={1}
                style={styles.textMarginTop}>
                {constants.SENDER}
              </CustomText>
              <CustomText
                color={Colors.White}
                weight={'400'}
                style={styles.textMarginTop}>
                3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJko
              </CustomText>
            </Block>
            <Block>
              <CustomText
                color={Colors.Gray}
                size={15}
                weight={'500'}
                letterSpacing={1}
                style={styles.textMarginTop}>
                {constants.RECEIVE_UPCASE}
              </CustomText>

              <CustomText
                color={Colors.White}
                weight={'400'}
                style={styles.textMarginTop}>
                3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJko
              </CustomText>
            </Block>
            <Block>
              <CustomText
                color={Colors.White}
                size={15}
                weight={'500'}
                letterSpacing={1}
                style={styles.textMarginTop}>
                AMOUNT
              </CustomText>

              <CustomText
                color={Colors.Blue_ice}
                weight={'400'}
                style={styles.textMarginTop}>
                0.02999999 PPAY
              </CustomText>
            </Block>
          </Block>
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default PaymentProofVerificationScreen;
