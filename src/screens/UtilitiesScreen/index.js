import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import Header from '~components/Header';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import constants from '~constants';
import {pxScale} from '~utils/funcHelper';
import CustomButton from '~components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const UtilitiesScreen = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();
  const options = [
    {title: 'Show public offline address'},
    {title: 'Get PPay from Beam Community Faucet'},
    {title: 'Rescan'},
    {title: 'Payment proof', route: 'PaymentProofVerificationScreen'},
    {title: 'Export wallet data'},
    {title: 'Import wallet data'},
  ];
  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <Header title={'Utilities'} goBack={goBack} />
      <Block style={styles.body}>
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
        <Block
          style={{
            backgroundColor: Colors.Background_item,
            padding: pxScale.wp(20),
            borderRadius: pxScale.wp(12),
            marginTop: pxScale.wp(20),
          }}>
          {options.map((item, index) => (
            <CustomButton
              onPress={() => item.route && navigation.navigate(item.route)}
              row
              middle
              key={index}
              style={{marginTop: index === 0 ? 0 : pxScale.hp(20)}}>
              <CustomText
                color={Colors.White}
                size={16}
                weight={'400'}
                style={{marginLeft: pxScale.wp(10)}}>
                {item.title}
              </CustomText>
            </CustomButton>
          ))}
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default UtilitiesScreen;
