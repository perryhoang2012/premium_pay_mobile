import React from 'react';
import style from './style';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import Header from '~components/Header';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';
import CustomButton from '~components/CustomButton';
import {pxScale} from '~utils/funcHelper';
import {ScrollView} from 'react-native';
import constants from '~constants';

const HomeScreen = () => {
  const dataAssets = [
    {
      title: '120.221798 BEAM',
      key: '14.098765 BEAM',
      value: '83.4 USD',
      color_start: '#0052D4',
      color_end: '#65C7F7',
    },
    {
      title: '76.22 RAYS',
      color_start: '#2980B9',
      color_end: '#6DD5FA',
    },
    {
      title: '198.8M BEAMX',
      color_start: '#000046',
      color_end: '#1CB5E0',
    },
  ];

  const dataTransactions = [
    {
      title: '115.60 BEAM',
      value: '79.93 USD',
      receive: true,
    },
    {
      title: '115.60 BEAM',
      value: '79.93 USD',
      receive: false,
    },
    {
      title: '115.60 BEAM',
      value: '79.93 USD',
      change: true,
    },
    {
      title: '115.60 BEAM',
      value: '79.93 USD',
      receive: true,
    },
  ];
  const _renderAssets = () => {
    return (
      <Block style={style.viewAssets}>
        <Block row space={'between'} middle style={style.viewTitleAssets}>
          <CustomText
            size={20}
            weight={'700'}
            style={style.letterSpacingText}
            color={Colors.White}>
            {constants.ASSETS}
          </CustomText>
          <AppSvg source={AppIcon.iconRight} width={14} height={14} />
        </Block>
        {dataAssets.map((item, index) => (
          <LinearGradient
            key={index}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[item.color_start, item.color_end]}
            style={style.viewItem}>
            <Block row middle flex space={'between'}>
              <Block flex row middle>
                <AppSvg source={AppIcon.iconBitCoin} width={20} height={20} />
                <CustomText
                  color={Colors.White}
                  weight={'600'}
                  size={16}
                  style={style.marginLeftStyle}>
                  {item.title}
                </CustomText>
              </Block>
              {item.value && (
                <CustomText
                  color={Colors.Gray}
                  weight={'400'}
                  size={14}
                  style={style.textRight}>
                  {item.value}
                </CustomText>
              )}
            </Block>
            {item.key && (
              <Block row style={style.viewLock}>
                <AppSvg source={AppIcon.iconLock} width={14} height={14} />
                <CustomText
                  color={Colors.Gray}
                  weight={'400'}
                  size={14}
                  style={style.marginLeftStyle}>
                  {item.key}
                </CustomText>
              </Block>
            )}
          </LinearGradient>
        ))}
      </Block>
    );
  };

  const _renderTransactions = () => {
    return (
      <Block style={style.marginTopView}>
        <Block row space={'between'} middle style={style.viewTitleTransition}>
          <CustomText
            size={20}
            weight={'700'}
            style={style.letterSpacingText}
            color={Colors.White}>
            {constants.TRANSACTIONS}
          </CustomText>
          <AppSvg source={AppIcon.iconRight} width={14} height={14} />
        </Block>
        {dataTransactions.map((item, index) => (
          <Block
            style={[
              {
                backgroundColor: item.receive ? '#005C97' : 'transparent',
              },
              style.viewItem,
            ]}>
            <Block row middle flex space={'between'}>
              <Block flex row middle>
                <AppSvg source={AppIcon.iconBitCoin} width={20} height={20} />
                <CustomText
                  color={Colors.White}
                  weight={'600'}
                  size={16}
                  style={style.marginLeftStyle}>
                  {item.title}
                </CustomText>
              </Block>
              {item.value && (
                <CustomText
                  color={Colors.Gray}
                  weight={'400'}
                  size={14}
                  style={style.textRight}>
                  {item.receive ? ' + ' : ' - '} {item.value}
                </CustomText>
              )}
            </Block>
            {item.receive && (
              <Block row style={style.viewLock}>
                <AppSvg
                  source={AppIcon.iconDownGradient}
                  width={14}
                  height={14}
                />
                <CustomText
                  color={'#1581B0'}
                  weight={'400'}
                  size={14}
                  style={style.marginLeftStyle}>
                  {constants.RECEIVE} ({constants.OFFLINE})
                </CustomText>
              </Block>
            )}
          </Block>
        ))}
      </Block>
    );
  };
  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={style.linearGradient}>
      <Header />
      <Block style={style.body}>
        <Block row middle style={style.viewStatus}>
          <LinearGradient
            colors={['#34e89e', '#0f3443']}
            style={style.gradientDot}
          />
          <CustomText
            color={Colors.Gray}
            weight={'500'}
            size={16}
            style={style.textStatus}>
            {constants.ONLINE}
          </CustomText>
        </Block>
        <Block middle row space="between" style={style.viewDoubleButton}>
          <CustomButton row center middle style={style.buttonSend}>
            <AppSvg source={AppIcon.iconUp} width={16} height={16} />
            <CustomText style={style.textButton}>{constants.SEND}</CustomText>
          </CustomButton>
          <CustomButton middle row center style={style.buttonReceive}>
            <AppSvg source={AppIcon.iconDown} width={16} height={16} />
            <CustomText style={style.textButton}>
              {constants.RECEIVE}
            </CustomText>
          </CustomButton>
        </Block>
        <Block style={style.viewScrollView}>
          <ScrollView>
            {_renderAssets()}
            {_renderTransactions()}
          </ScrollView>
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default HomeScreen;
