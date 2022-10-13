import {Switch} from 'react-native';
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
import CustomButton from '~components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {saveSettingApp} from '~redux/actions/user';

const PrivacyScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const settingApp = useSelector(rootState => rootState?.settingApp);

  const goBack = () => navigation.goBack();

  const renderSetting = () => {
    const setting = [
      {
        title: 'Ask for password on every Send',
        type: 'switch',
        value: 'ask_for_password_on_every_send',
      },
      {
        title: 'Enable Fingerprint/Face ID unlock',
        type: 'switch',
        value: 'enable_biometrics',
      },
      {title: 'Max Privacy lock time limit', subtitle: '72 hours'},
      {title: 'Verify speed phrase'},
      {title: 'Show owner key'},
      {title: 'Change password', route: 'ChangePasswordScreen'},
    ];
    return (
      <Block style={styles.viewContent}>
        {setting.map((item, index) => (
          <CustomButton
            key={index}
            style={{
              marginTop: index === 0 ? 0 : pxScale.hp(20),
            }}
            middle={item.type === 'switch' ? true : false}
            row={item.type === 'switch' ? true : false}
            onPress={() => item.route && navigation.navigate(item.route)}>
            <CustomText
              color={Colors.White}
              size={16}
              weight={'400'}
              medium
              style={[styles.textTitle]}>
              {item.title}
            </CustomText>
            {item.type === 'switch' && (
              <Switch
                trackColor={{
                  false: Colors.Gradient_end,
                  true: Colors.Pink,
                }}
                thumbColor={Colors.White}
                ios_backgroundColor={Colors.Gray}
                value={settingApp[item.value]}
                onValueChange={e => {
                  let newObj = {...settingApp};
                  newObj[item.value] = e;
                  dispatch(saveSettingApp(newObj));
                }}
                style={styles.switch}
              />
            )}
            {item.subtitle && (
              <CustomText
                color={Colors.Gray}
                size={14}
                weight={'400'}
                regular
                style={styles.textSubTitle}>
                {item.subtitle}
              </CustomText>
            )}
          </CustomButton>
        ))}
      </Block>
    );
  };

  return (
    <LinearGradient
      colors={[
        Colors.Gradient_start_2,
        Colors.Gradient_end,
        Colors.Gradient_end,
      ]}
      style={styles.linearGradient}>
      <Header title={'Privacy'} goBack={goBack} />
      <Block style={styles.body}>
        <Block row middle style={styles.viewStatus}>
          <Block style={styles.gradientDot} />
          <CustomText
            color={Colors.Gray}
            weight={'400'}
            medium
            size={14}
            style={styles.textStatus}>
            {constants.ONLINE}
          </CustomText>
        </Block>
        {renderSetting()}
      </Block>
    </LinearGradient>
  );
};

export default PrivacyScreen;
