import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Block from './Block';
import {pxScale} from '~utils/funcHelper';
import Insets from '~utils/insets';
import AppSvg from './AppSvg';
import {AppIcon} from '~assets/svg';
import CustomText from './CustomText';
import Colors from '~assets/colors';
import {useNavigation} from '@react-navigation/native';
import CustomButton from './CustomButton';

const Header = () => {
  const navigation = useNavigation();
  return (
    <Block space={'between'} center middle row style={styles.constrainer}>
      <CustomButton onPress={() => console.log('run')}>
        <AppSvg source={AppIcon.iconMenu} width={20} height={20} />
      </CustomButton>
      <Block>
        <CustomText style={styles.textCenter}>WALLET</CustomText>
      </Block>
      <Block>
        <AppSvg source={AppIcon.iconEye} width={18} height={18} />
      </Block>
    </Block>
  );
};

export default Header;

const styles = StyleSheet.create({
  textCenter: {
    fontWeight: '500',
    marginLeft: pxScale.wp(4),
    letterSpacing: 4,
    fontSize: pxScale.fontSize(20),
    color: Colors.White,
  },
  constrainer: {
    height: pxScale.hp(50),
    marginTop: Insets.TOP,
    paddingHorizontal: 10,
  },
});
