import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import HeaderDrawer from '~components/HeaderDrawer';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import constants from '~constants';
import {AppIcon} from '~assets/svg';
import CustomButton from '~components/CustomButton';
import {pxScale} from '~utils/funcHelper';
import AppSvg from '~components/AppSvg';

const SettingScreen = () => {
  const renderSettingGeneral = () => {
    const arrayButton = [
      {id: 1, title: 'General', icon: AppIcon.iconSetting},
      {id: 1, title: 'Notifications', icon: AppIcon.iconNotification},
      {id: 1, title: 'Node', icon: AppIcon.iconNode},
      {id: 1, title: 'Privacy', icon: AppIcon.iconPrivacy},
      {id: 1, title: 'Utilities', icon: AppIcon.iconUtilities},
    ];
    return (
      <Block
        style={{
          backgroundColor: Colors.Background_item,
          padding: pxScale.wp(20),
          borderRadius: pxScale.wp(12),
        }}>
        {arrayButton.map((item, index) => (
          <CustomButton
            row
            middle
            key={index}
            style={{marginTop: index === 0 ? 0 : pxScale.wp(16)}}>
            <AppSvg source={item.icon} width={20} height={20} />
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
    );
  };

  const renderSettingTag = () => {
    return (
      <Block
        style={{
          backgroundColor: Colors.Background_item,
          padding: pxScale.wp(20),
          borderRadius: pxScale.wp(12),
          marginTop: pxScale.wp(20),
        }}>
        <CustomButton row middle>
          <AppSvg source={AppIcon.iconTag} width={20} height={20} />
          <CustomText
            color={Colors.White}
            size={16}
            weight={'400'}
            style={{marginLeft: pxScale.wp(10)}}>
            Tag
          </CustomText>
        </CustomButton>
      </Block>
    );
  };

  const renderSettingRateAndReport = () => {
    return (
      <Block
        style={{
          backgroundColor: Colors.Background_item,
          padding: pxScale.wp(20),
          borderRadius: pxScale.wp(12),
          marginTop: pxScale.wp(20),
        }}>
        <CustomButton row middle>
          <AppSvg source={AppIcon.iconStar} width={20} height={20} />
          <CustomText
            color={Colors.White}
            size={16}
            weight={'400'}
            style={{marginLeft: pxScale.wp(10)}}>
            Rate The App
          </CustomText>
        </CustomButton>
        <CustomButton row middle style={{marginTop: pxScale.wp(20)}}>
          <AppSvg source={AppIcon.iconReport} width={20} height={20} />
          <CustomText
            color={Colors.White}
            size={16}
            weight={'400'}
            style={{marginLeft: pxScale.wp(10)}}>
            Report a problem
          </CustomText>
        </CustomButton>
      </Block>
    );
  };

  const renderSettingRemove = () => {
    return (
      <Block
        style={{
          backgroundColor: Colors.Background_item,
          padding: pxScale.wp(20),
          borderRadius: pxScale.wp(12),
          marginTop: pxScale.wp(20),
        }}>
        <CustomButton row middle>
          <AppSvg source={AppIcon.iconTrashRed} width={20} height={20} />
          <CustomText
            color={Colors.Primary}
            size={16}
            weight={'400'}
            style={{marginLeft: pxScale.wp(10)}}>
            Remove current wallet
          </CustomText>
        </CustomButton>
      </Block>
    );
  };
  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <HeaderDrawer title={'SETTINGS'} />
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
        {renderSettingGeneral()}
        {renderSettingTag()}
        {renderSettingRateAndReport()}
        {renderSettingRemove()}
      </Block>
    </LinearGradient>
  );
};

export default SettingScreen;
