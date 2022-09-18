import {SectionList, StyleSheet, Text, View} from 'react-native';
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
import CustomButton from '~components/CustomButton';
import {pxScale} from '~utils/funcHelper';
import {useNavigation} from '@react-navigation/native';

const NotificationScreen = () => {
  const navigation = useNavigation();

  const DATA = [
    {
      title: 'Today',
      data: [
        {
          title: 'There are good deals',
          time: '1m ago',
          subTitle:
            'Lots of great deals around new york that you should check out',
          icon: AppIcon.iconHome,
          seen: true,
        },
        {
          title: 'The house is being discounted',
          time: '4m ago',
          subTitle:
            'Lots of great deals around new york that you should check out',
          icon: AppIcon.iconDiscount,
        },
      ],
    },
    {
      title: 'This Week',
      data: [
        {
          title: 'The house is being discounted',
          time: '4 days',
          subTitle:
            'There are several houses currently on sale that you can check',
          icon: AppIcon.iconChartLine,
          seen: true,
        },
        {
          title: 'There are good deals',
          time: '5 days',
          subTitle:
            'Lots of great deals around new york that you should check out',
          icon: AppIcon.iconHome,
        },
      ],
    },
  ];

  const Item = item => {
    return (
      <Block row style={{height: pxScale.hp(61), marginTop: pxScale.hp(16)}}>
        <Block
          middle
          center
          style={{
            backgroundColor: 'rgba(47, 162, 185, 0.1)',
            width: pxScale.wp(44),
            height: pxScale.hp(44),
            borderRadius: pxScale.wp(12),
          }}>
          <AppSvg source={item.item.icon} width={22} height={22} />
        </Block>
        <Block style={{marginLeft: pxScale.wp(8)}}>
          <Block row>
            <CustomText
              color={Colors.White}
              size={14}
              weight="500"
              style={{width: pxScale.wp(220)}}>
              {item.item.title}
            </CustomText>
            <CustomText color={Colors.Gray} size={12}>
              {item.item.time}
            </CustomText>
          </Block>
          <Block row middle>
            <CustomText
              size={14}
              style={{width: pxScale.wp(220), marginTop: pxScale.hp(4)}}
              color={'#B1B5C4'}>
              {item.item.subTitle}
            </CustomText>
            {item.item.seen && (
              <Block
                style={{
                  width: pxScale.wp(8),
                  height: pxScale.hp(8),
                  backgroundColor: '#2FA2B9',
                  borderRadius: 5,
                  marginLeft: pxScale.wp(20),
                }}
              />
            )}
          </Block>
        </Block>
      </Block>
    );
  };

  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <HeaderDrawer title={'NOTIFICATION'} noEye />
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
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => <Item item={item} />}
          ListEmptyComponent={() => (
            <Block center middle flex>
              <CustomText
                size={20}
                weight={'700'}
                color={Colors.White}
                style={styles.textNoData}>
                {constants.NO_DATA_NOTIFICATION}
              </CustomText>
              <CustomText
                align={'center'}
                color={Colors.Gray}
                style={styles.textNoData}>
                {constants.SUBTITLE_NO_DATA_NOTIFICATION}
              </CustomText>
              <CustomButton
                center
                middle
                style={{
                  backgroundColor: Colors.White,
                  height: pxScale.hp(45),
                  width: pxScale.wp(218),
                  borderRadius: pxScale.hp(10),
                  marginTop: pxScale.hp(10),
                }}
                onPress={() =>
                  navigation.navigate('SettingNotificationScreen')
                }>
                <CustomText size={16} weight={'500'} color={Colors.Black}>
                  {constants.NOTIFICATIONS_SETTINGS}
                </CustomText>
              </CustomButton>
            </Block>
          )}
          renderSectionHeader={({section: {title}}) => (
            <CustomText
              size={16}
              color={Colors.White}
              weight={'700'}
              style={{marginTop: pxScale.hp(10)}}>
              {title}
            </CustomText>
          )}
        />
      </Block>
    </LinearGradient>
  );
};

export default NotificationScreen;
