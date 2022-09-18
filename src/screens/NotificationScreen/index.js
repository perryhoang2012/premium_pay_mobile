import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import Block from '~components/Block';
import HeaderDrawer from '~components/HeaderDrawer';
import CustomText from '~components/CustomText';
import constants from '~constants';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';

const NotificationScreen = () => {
  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <HeaderDrawer title={'UTXO'} />
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
      <Block style={styles.body}>
        <Block center middle flex>
          <AppSvg source={AppIcon.iconBell} width={35} height={35} />
          <CustomText color={Colors.Gray} style={styles.textNoData}>
            {constants.NO_DATA_NOTIFICATION}
          </CustomText>
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default NotificationScreen;
