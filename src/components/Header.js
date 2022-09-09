import {StyleSheet} from 'react-native';
import React from 'react';
import Block from './Block';
import CustomButton from './CustomButton';
import AppSvg from './AppSvg';
import CustomText from './CustomText';
import Colors from '~assets/colors';
import {pxScale} from '~utils/funcHelper';
import Insets from '~utils/insets';
import {AppIcon} from '~assets/svg';

const Header = props => {
  const {title, styleTitle, goBack, iconEye} = props;
  return (
    <Block center middle row style={styles.constrainer}>
      <Block middle row style={{width: '80%'}}>
        <CustomButton onPress={() => goBack()}>
          <AppSvg source={AppIcon.iconRight} width={24} height={24} />
        </CustomButton>
        <CustomText
          size={20}
          color={Colors.White}
          customFont={'Bold'}
          weight={'600'}
          style={[styleTitle, {marginLeft: pxScale.wp(10), lineHeight: 28}]}>
          {title}
        </CustomText>
      </Block>
      <Block center style={{width: '20%', alignItems: 'flex-end'}}>
        {iconEye && (
          <CustomButton>
            <AppSvg source={AppIcon.iconEye} width={24} height={24} />
          </CustomButton>
        )}
      </Block>
    </Block>
  );
};

export default Header;

const styles = StyleSheet.create({
  constrainer: {
    height: pxScale.hp(50),
    marginTop: Insets.TOP,
    paddingHorizontal: 10,
  },
});
