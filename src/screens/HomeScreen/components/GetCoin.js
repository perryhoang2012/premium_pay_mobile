import {StyleSheet} from 'react-native';
import React from 'react';
import Block from '~components/Block';
import Colors from '~assets/colors';
import CustomText from '~components/CustomText';
import {pxScale} from '~utils/funcHelper';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';
import CustomButton from '~components/CustomButton';
import constants from '~constants';

const GetCoin = props => {
  const {toggleGetCoin} = props;
  return (
    <Block center middle style={styles.container}>
      <Block row>
        <Block>
          <CustomText
            style={styles.textContent}
            color={Colors.White}
            weight={'400'}
            size={14}>
            {constants.SUBTITLE_GET_COINS}
          </CustomText>
        </Block>
        <CustomButton style={styles.textMarginLeft} onPress={toggleGetCoin}>
          <AppSvg source={AppIcon.iconCancel} width={14} height={14} />
        </CustomButton>
      </Block>
      <CustomButton row middle center style={styles.buttonGradient}>
        <AppSvg source={AppIcon.iconDown_Gradient} width={14} height={14} />
        <CustomText
          color={Colors.Blue_ice}
          size={16}
          weight={'700'}
          style={styles.textMarginLeft}>
          {constants.GET_COINS}
        </CustomText>
      </CustomButton>
    </Block>
  );
};

export default GetCoin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Background_item,
    padding: pxScale.wp(20),
    borderRadius: pxScale.wp(12),
    marginTop: pxScale.wp(10),
  },
  textContent: {},
  buttonGradient: {
    marginTop: pxScale.hp(16),
    height: pxScale.hp(40),
    width: pxScale.wp(157),
    borderRadius: pxScale.hp(40),
    borderColor: Colors.Blue_ice,
    borderWidth: 1,
  },

  textMarginLeft: {marginLeft: pxScale.wp(10)},
});
