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
import {useDispatch, useSelector} from 'react-redux';
import {saveSettingApp} from '~redux/actions/user';

const SettingGeneralScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const settingApp = useSelector(rootState => rootState?.settingApp);

  const goBack = () => navigation.goBack();

  const settingOne = () => {
    const setting = [
      {
        title: 'Allow open external link',
        type: 'switch',
        value: 'allow_open_external_links',
      },
      {
        title: 'Allow wallet to run in background',
        type: 'switch',
        value: 'allow_wallet_to_run_in_background',
      },
      {title: 'Lock Screen', subtitle: 'Never'},
      {title: 'Show Amount in', subtitle: 'USD (United States Dollar)'},
      {title: 'Clear local wallet  data'},
    ];
    return (
      <Block
        style={{
          backgroundColor: Colors.Background_block,
          padding: pxScale.wp(20),
          borderRadius: pxScale.wp(12),
          marginTop: pxScale.wp(20),
          borderColor: Colors.Border_Gray,
          borderWidth: 1,
        }}>
        {setting.map((item, index) => (
          <Block
            key={index}
            middle={item.type === 'switch' ? true : false}
            row={item.type === 'switch' ? true : false}>
            <CustomText
              color={Colors.White}
              size={14}
              medium
              weight={'500'}
              style={[
                styles.textTile,
                {
                  marginTop: index === 0 ? 0 : pxScale.hp(20),
                },
              ]}>
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
                regular
                weight={'400'}
                style={styles.textSubTitle}>
                {item.subtitle}
              </CustomText>
            )}
          </Block>
        ))}
      </Block>
    );
  };

  const settingTwo = () => {
    const setting = [
      {title: 'Language', subtitle: 'English'},
      {title: 'Dark Mode', type: 'switch', value: 'dark_mode'},
    ];
    return (
      <Block
        style={{
          backgroundColor: Colors.Background_block,
          padding: pxScale.wp(20),
          borderRadius: pxScale.wp(12),
          marginTop: pxScale.wp(20),
          borderColor: Colors.Border_Gray,
          borderWidth: 1,
        }}>
        {setting.map((item, index) => (
          <Block
            middle={item.type === 'switch' ? true : false}
            row={item.type === 'switch' ? true : false}>
            <CustomText
              color={Colors.White}
              size={14}
              medium
              weight={'500'}
              style={[
                styles.textTile,
                {
                  marginTop: index === 0 ? 0 : pxScale.hp(20),
                },
              ]}>
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
                size={16}
                regular
                weight={'400'}
                style={styles.textSubTitle}>
                {item.subtitle}
              </CustomText>
            )}
          </Block>
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
      <Header title={'General'} goBack={goBack} />
      <Block style={styles.body}>
        <Block row middle style={styles.viewStatus}>
          <Block style={styles.gradientDot} />
          <CustomText
            color={Colors.Gray}
            weight={'400'}
            size={16}
            style={styles.textStatus}>
            {constants.ONLINE}
          </CustomText>
        </Block>
        {settingOne()}
        {settingTwo()}
      </Block>
    </LinearGradient>
  );
};

export default SettingGeneralScreen;
