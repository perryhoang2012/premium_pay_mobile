import {StyleSheet} from 'react-native';
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

const HeaderDrawer = prop => {
  const {title, noEye} = prop;
  const navigation = useNavigation();
  return (
    <Block space={'between'} center middle row style={styles.constrainer}>
      <CustomButton
        hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
        onPress={() => {
          if (title === 'WALLET') {
            navigation.toggleDrawer();
          } else {
            navigation.replace('AppDrawer');
          }
        }}>
        {title === 'WALLET' ? (
          <AppSvg source={AppIcon.iconMenu} width={24} height={24} />
        ) : (
          <AppSvg source={AppIcon.iconCancel} width={14} height={14} />
        )}
      </CustomButton>
      <Block>
        <CustomText
          customFont={'Bold'}
          style={styles.textCenter}
          size={24}
          weight={'700'}>
          {title}
        </CustomText>
      </Block>
      <Block style={{width: 24}}>
        {/* {!noEye ? (
          <AppSvg source={AppIcon.iconEye} width={24} height={24} />
        ) : (
          <Block style={{width: 24}} />
        )} */}
      </Block>
    </Block>
  );
};

export default HeaderDrawer;

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
});
