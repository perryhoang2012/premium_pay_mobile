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
import {AppIcon} from '~assets/svg';
import AppSvg from '~components/AppSvg';
import {useNavigation} from '@react-navigation/native';

const NodeScreen = () => {
  const navigation = useNavigation();
  const [select, setSelect] = React.useState(0);

  const goBack = () => navigation.goBack();

  const renderOption = () => {
    const setting = [
      {
        title: 'RANDOM NODE (fast sync)',
        subTitle: 'For those who don’t have any  other Fac wallet.',
        icon: AppIcon.iconNode,
      },
      {
        title: 'MOBILE NODE (slow sync)',
        subTitle:
          'For those who want to sync the balance across multiple Fac wallets.',
        icon: AppIcon.iconMobile,
      },
      {
        title: 'OWN NODE (fast and secure, advanced)',
        subTitle: 'For those who don’t have any  other Fac wallet.',
        icon: AppIcon.iconQrCode,
      },
    ];
    return (
      <Block
        style={{
          marginTop: pxScale.wp(20),
        }}>
        {setting.map((item, index) => (
          <Block
            key={index}
            row
            middle
            style={{marginTop: index !== 0 ? pxScale.wp(30) : 0}}>
            <CustomButton onPress={() => setSelect(index)}>
              <AppSvg
                source={
                  select === index ? AppIcon.iconSelect : AppIcon.iconNoSelect
                }
                width={16}
                height={16}
              />
            </CustomButton>
            <Block
              center
              style={{
                marginLeft: pxScale.wp(10),
                justifyContent: 'space-around',
              }}>
              <AppSvg source={item.icon} width={24} height={24} />
              <CustomText
                color={Colors.White}
                size={16}
                weight={'400'}
                style={{
                  marginTop: pxScale.wp(10),
                }}>
                {item.title}
              </CustomText>
              <CustomText
                color={Colors.White}
                size={14}
                weight={'400'}
                style={{
                  marginTop: pxScale.wp(10),
                }}>
                {item.subTitle}
              </CustomText>
            </Block>
          </Block>
        ))}
      </Block>
    );
  };

  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <Header title={'Node'} goBack={goBack} />
      <Block style={styles.body}>
        <Block row middle style={styles.viewStatus}>
          <Block style={styles.gradientDot} />
          <CustomText
            color={Colors.Gray}
            weight={'500'}
            size={14}
            style={styles.textStatus}>
            {constants.ONLINE} : mobile node
          </CustomText>
        </Block>
        {renderOption()}
      </Block>
    </LinearGradient>
  );
};

export default NodeScreen;
