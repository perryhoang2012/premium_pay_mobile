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

const SettingNotificationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const settingApp = useSelector(rootState => rootState?.settingApp);
  const goBack = () => navigation.goBack();

  const renderSetting = () => {
    const setting = [
      {
        title: 'Wallet Update',
        type: 'switch',
        value: 'notification_wallet_update',
      },
      {
        title: 'Transaction Status',
        type: 'switch',
        value: 'notification_transaction_update',
      },
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
          <Block key={index} middle row space="between" style={{height: 40}}>
            <CustomText
              color={Colors.White}
              size={16}
              weight={'500'}
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
      <Header title={'Notification'} goBack={goBack} />
      <Block style={styles.body}>
        <Block row middle style={styles.viewStatus}>
          <Block style={styles.gradientDot} />
          <CustomText
            color={Colors.Gray}
            weight={'400'}
            size={14}
            medium
            style={styles.textStatus}>
            {constants.ONLINE}
          </CustomText>
        </Block>
        {renderSetting()}
      </Block>
    </LinearGradient>
  );
};

export default SettingNotificationScreen;
