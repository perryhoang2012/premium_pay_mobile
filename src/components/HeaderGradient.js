import {StyleSheet} from 'react-native';
import React from 'react';
import Block from './Block';
import {pxScale} from '~utils/funcHelper';
import Insets from '~utils/insets';
import AppSvg from './AppSvg';
import {AppIcon} from '~assets/svg';
import CustomText from './CustomText';
import Colors from '~assets/colors';
import CustomButton from './CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import constants from '~constants';

const HeaderGradient = prop => {
  const {goBack, title, styleTitle} = prop;
  return (
    <Block style={styles.linearGradient}>
      <Block space={'between'} center middle row style={styles.constrainer}>
        <CustomButton onPress={() => goBack()}>
          <AppSvg source={AppIcon.iconRight} width={24} height={24} />
        </CustomButton>
        <Block>
          <CustomText
            customFont={'Bold'}
            style={[styles.textCenter, styleTitle]}
            size={24}
            weight={'500'}>
            {title}
          </CustomText>
        </Block>
        <Block style={styles.viewRight} />
      </Block>
      <Block row middle style={styles.viewStatus}>
        <Block style={styles.gradientDot} />
        <CustomText
          color={Colors.Gray}
          medium
          weight={'500'}
          size={14}
          style={styles.textStatus}>
          {constants.ONLINE}: mobile node
        </CustomText>
      </Block>
    </Block>
  );
};

export default HeaderGradient;

const styles = StyleSheet.create({
  textCenter: {
    marginLeft: pxScale.wp(4),
    letterSpacing: 4,
    color: Colors.White,
  },
  constrainer: {
    height: pxScale.hp(50),
    marginTop: Insets.TOP,
    paddingHorizontal: 10,
  },
  viewStatus: {
    paddingHorizontal: pxScale.wp(10),
    marginBottom: pxScale.hp(10),
  },
  gradientDot: {
    width: pxScale.wp(12),
    height: pxScale.hp(12),
    borderRadius: pxScale.hp(50),
    backgroundColor: Colors.Green_status,
  },
  textStatus: {
    marginLeft: pxScale.wp(10),
  },
  viewRight: {width: 24},
});
