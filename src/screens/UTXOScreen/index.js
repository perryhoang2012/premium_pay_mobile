import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import HeaderDrawer from '~components/HeaderDrawer';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import constants from '~constants';

const UTXOScreen = () => {
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
      <Block style={styles.body}></Block>
    </LinearGradient>
  );
};

export default UTXOScreen;
