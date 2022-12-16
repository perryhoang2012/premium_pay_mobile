import {Platform, UIManager, LayoutAnimation} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import {Header} from '~components';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import constants from '~constants';
import {pxScale} from '~utils/funcHelper';
import CustomButton from '~components/CustomButton';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';
import {useNavigation} from '@react-navigation/native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TransactionDetailScreen = () => {
  const navigation = useNavigation();
  const [showDropDown, setShowDropdown] = React.useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={[
        Colors.Gradient_start_2,
        Colors.Gradient_end,
        Colors.Gradient_end,
      ]}
      style={styles.linearGradient}>
      <Header title={'Transaction details'} iconEye goBack={goBack} />

      <Block style={styles.body}>
        <Block row middle style={styles.viewStatus}>
          <Block style={styles.gradientDot} />
          <CustomText
            color={Colors.Gray}
            weight={'400'}
            size={14}
            regular
            style={styles.textStatus}>
            {constants.ONLINE}
          </CustomText>
        </Block>
        <CustomText size={14} regular color={Colors.White} weight={'400'}>
          3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU
        </CustomText>
        <CustomText
          color={Colors.White}
          size={14}
          medium
          weight={'700'}
          letterSpacing={1}
          style={{marginTop: pxScale.hp(15)}}>
          KERNEL ID
        </CustomText>
        <CustomText
          size={14}
          regular
          color={Colors.White}
          weight={'400'}
          style={{marginTop: pxScale.hp(10)}}>
          3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU
        </CustomText>

        <CustomButton row middle style={{marginTop: pxScale.hp(20)}}>
          <CustomText
            size={12}
            medium
            color={Colors.Pink}
            weight={'500'}
            style={{marginRight: pxScale.wp(10)}}>
            Open in Block Explorer
          </CustomText>
          <AppSvg source={AppIcon.openExplorer} width={16} height={16} />
        </CustomButton>

        <Block style={styles.viewItem}>
          <CustomButton
            row
            space={'between'}
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut,
              );
              setShowDropdown(pre => !pre);
            }}>
            <CustomText
              color={Colors.White}
              size={14}
              medium
              weight={'500'}
              letterSpacing={1}>
              {constants.PAYMENT_PROOF}
            </CustomText>
            {showDropDown ? (
              <AppSvg source={AppIcon.iconDropUp} width={14} height={14} />
            ) : (
              <AppSvg source={AppIcon.iconDropDown} width={14} height={14} />
            )}
          </CustomButton>

          <Block>
            <CustomText
              color={Colors.Gray}
              size={14}
              weight={'500'}
              medium
              letterSpacing={1}
              style={{marginTop: pxScale.hp(10)}}>
              {constants.CODE}
            </CustomText>

            <CustomText
              color={Colors.White}
              weight={'400'}
              regular
              size={14}
              style={{marginTop: pxScale.hp(10)}}>
              {showDropDown
                ? '3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko'
                : '3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU ...'}
            </CustomText>
          </Block>
        </Block>

        <Block style={styles.viewItem}>
          <CustomButton
            row
            space={'between'}
            onPress={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut,
              );
              setShowDropdown(pre => !pre);
            }}>
            <CustomText
              color={Colors.White}
              size={14}
              medium
              weight={'500'}
              letterSpacing={1}>
              {constants.TRANSACTION_LIST}
            </CustomText>
            {showDropDown ? (
              <AppSvg source={AppIcon.iconDropUp} width={14} height={14} />
            ) : (
              <AppSvg source={AppIcon.iconDropDown} width={14} height={14} />
            )}
          </CustomButton>

          <Block row middle style={{marginTop: pxScale.hp(10)}}>
            <AppSvg source={AppIcon.iconUpPink} width={14} height={14} />
            <CustomText
              color={Colors.White}
              size={14}
              weight={'500'}
              letterSpacing={1}
              style={{marginLeft: pxScale.hp(10)}}>
              0.01 FAC
            </CustomText>
          </Block>
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default TransactionDetailScreen;
