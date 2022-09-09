import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Block from '~components/Block';
import Colors from '~assets/colors';
import CustomText from '~components/CustomText';
import {pxScale} from '~utils/funcHelper';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';
import CustomButton from '~components/CustomButton';

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
            See the wallet in action. Get a very small amount of Beams from the
            community faucet.
          </CustomText>
        </Block>
        <CustomButton
          style={{marginLeft: pxScale.wp(10)}}
          onPress={toggleGetCoin}>
          <AppSvg source={AppIcon.iconCancel} width={14} height={14} />
        </CustomButton>
      </Block>
      <CustomButton row middle center style={styles.buttonGradient}>
        <AppSvg source={AppIcon.iconDown_Gradient} width={14} height={14} />
        <CustomText
          color={Colors.Blue_ice}
          size={16}
          weight={'700'}
          style={{marginLeft: pxScale.wp(10)}}>
          Get coins
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
});
