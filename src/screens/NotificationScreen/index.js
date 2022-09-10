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

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const goBack = () => navigation.goBack();

  const renderSetting = () => {
    const setting = [
      {title: 'Wallet Update', type: 'switch'},
      {title: 'Transaction Status', type: 'switch'},
    ];
    return (
      <Block
        style={{
          backgroundColor: Colors.Background_item,
          padding: pxScale.wp(20),
          borderRadius: pxScale.wp(12),
          marginTop: pxScale.wp(20),
        }}>
        {setting.map((item, index) => (
          <Block
            key={index}
            middle={item.type === 'switch' ? true : false}
            row={item.type === 'switch' ? true : false}>
            <CustomText
              color={Colors.White}
              size={16}
              weight={'400'}
              style={[
                styles.textTitle,
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
                  true: Colors.Gradient_start,
                }}
                thumbColor={Colors.White}
                ios_backgroundColor={Colors.Gray}
                value={isEnabled}
                onValueChange={toggleSwitch}
                style={styles.switch}
              />
            )}
            {item.subtitle && (
              <CustomText
                color={Colors.Gray}
                size={16}
                weight={'400'}
                style={styles.textSubtitle}>
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
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <Header title={'Notification'} goBack={goBack} />
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
        {renderSetting()}
      </Block>
    </LinearGradient>
  );
};

export default NotificationScreen;
