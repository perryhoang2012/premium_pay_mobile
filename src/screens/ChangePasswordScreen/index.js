import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import Header from '~components/Header';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import constants from '~constants';
import {pxScale} from '~utils/funcHelper';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '~components/CustomInput';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  const _renderInput = () => {
    const input = [
      {title: 'CURRENT PASSWORD', value: 'current_password'},
      {title: 'NEW PASSWORD', value: 'new_password'},
      {title: 'PASSWORD CONFIRMATION', value: 'password_confirmation'},
    ];
    return input.map((item, index) => (
      <Block key={index} style={{marginBottom: pxScale.hp(30)}}>
        <CustomText
          color={Colors.White}
          weight={'500'}
          style={{marginBottom: pxScale.hp(8)}}>
          {item.title}
        </CustomText>
        <CustomInput
          password
          style={{
            height: pxScale.hp(48),
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: pxScale.hp(10),
            color: Colors.Gray,
          }}
          onChangeText={() => console.log('hehe')}
        />
      </Block>
    ));
  };

  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <Header title={'Change password'} goBack={goBack} />
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
        <Block>{_renderInput()}</Block>
      </Block>
    </LinearGradient>
  );
};

export default ChangePasswordScreen;
