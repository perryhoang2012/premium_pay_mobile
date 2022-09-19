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
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <Header title={'Transaction details'} iconEye goBack={goBack} />

      <Block style={styles.body}>
        <Block row middle style={styles.viewStatus}>
          <Block style={styles.gradientDot} />
          <CustomText
            color={Colors.Gray}
            weight={'400'}
            size={16}
            style={styles.textStatus}>
            {constants.ONLINE}
          </CustomText>
        </Block>
        <CustomText color={Colors.White} weight={'400'}>
          3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU
        </CustomText>

        <CustomText
          color={Colors.White}
          size={16}
          weight={'500'}
          letterSpacing={1}
          style={{marginTop: pxScale.hp(15)}}>
          KERNEL ID
        </CustomText>
        <CustomText
          color={Colors.White}
          weight={'400'}
          style={{marginTop: pxScale.hp(10)}}>
          3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU
        </CustomText>

        <CustomButton row middle style={{marginTop: pxScale.hp(10)}}>
          <CustomText
            size={14}
            color={Colors.Blue_ice}
            weight={'400'}
            customFont="Bold"
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
              size={16}
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
              size={15}
              weight={'500'}
              letterSpacing={1}
              style={{marginTop: pxScale.hp(10)}}>
              {constants.CODE}
            </CustomText>

            <CustomText
              color={Colors.White}
              weight={'400'}
              style={{marginTop: pxScale.hp(10)}}>
              {showDropDown
                ? '3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko3XHPHamvtJko'
                : '3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU3XHPHamvtJkoU ...'}
            </CustomText>
          </Block>
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default TransactionDetailScreen;
