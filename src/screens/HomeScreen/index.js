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

const HomeScreen = () => {
  const dataAssets = [
    {
      title: '120.221798 BEAM',
      key: '14.098765 BEAM',
      value: '83.4 USD',
      color_start: 'rgb(1,94,111)',
      color_end: 'rgb(3,49,95)',
    },
    {
      title: '76.22 RAYS',
      color_start: 'rgb(38,99,85)',
      color_end: 'rgb(3,49,95)',
    },
    {
      title: '198.8M BEAMX',
      color_start: 'rgb(50,63,130)',
      color_end: 'rgb(3,49,95)',
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
      <Block style={{paddingHorizontal: pxScale.wp(10)}}>
        <Block row space={'between'} middle style={{marginBottom: 10}}>
          <CustomText
            size={20}
            weight={'700'}
            style={{letterSpacing: 2}}
            color={Colors.White}>
            Assets
          </CustomText>
          <AppSvg source={AppIcon.iconRight} width={14} height={14} />
        </Block>
        {dataAssets.map((item, index) => (
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[item.color_start, item.color_end]}
            style={{
              padding: 10,
              borderRadius: 10,
              marginBottom: 10,
              paddingVertical: 20,
            }}>
            <Block row middle flex space={'between'}>
              <Block flex row middle>
                <AppSvg source={AppIcon.iconBitCoin} width={20} height={20} />
                <CustomText
                  color={Colors.White}
                  weight={'600'}
                  size={16}
                  style={{marginLeft: 10}}>
                  {item.title}
                </CustomText>
              </Block>
              {item.value && (
                <CustomText
                  color={Colors.Gray}
                  weight={'400'}
                  size={14}
                  style={{flex: 1, textAlign: 'right'}}>
                  {item.value}
                </CustomText>
              )}
            </Block>
            {item.key && (
              <Block row style={{marginLeft: 20, marginTop: 6}}>
                <AppSvg source={AppIcon.iconLock} width={14} height={14} />
                <CustomText
                  color={Colors.Gray}
                  weight={'400'}
                  size={14}
                  style={{marginLeft: 10}}>
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
      <Block>
        <Block
          row
          space={'between'}
          middle
          style={{marginBottom: 10, paddingHorizontal: pxScale.wp(10)}}>
          <CustomText
            size={20}
            weight={'700'}
            style={{letterSpacing: 2}}
            color={Colors.White}>
            Transactions
          </CustomText>
          <AppSvg source={AppIcon.iconRight} width={14} height={14} />
        </Block>
        {dataTransactions.map((item, index) => (
          <Block
            style={{
              backgroundColor: item.receive ? 'rgb(15,48,80)' : 'transparent',
              padding: 10,
              borderRadius: 10,
              marginBottom: 10,
              paddingVertical: 30,
            }}>
            <Block row middle flex space={'between'}>
              <Block flex row middle>
                <AppSvg source={AppIcon.iconBitCoin} width={20} height={20} />
                <CustomText
                  color={Colors.White}
                  weight={'600'}
                  size={16}
                  style={{marginLeft: 10}}>
                  {item.title}
                </CustomText>
              </Block>
              {item.value && (
                <CustomText
                  color={Colors.Gray}
                  weight={'400'}
                  size={14}
                  style={{flex: 1, textAlign: 'right'}}>
                  {item.receive ? ' + ' : ' - '} {item.value}
                </CustomText>
              )}
            </Block>
            {item.receive && (
              <Block row style={{marginLeft: 20, marginTop: 6}}>
                <AppSvg
                  source={AppIcon.iconDownGradient}
                  width={14}
                  height={14}
                />
                <CustomText
                  color={'#1581B0'}
                  weight={'400'}
                  size={14}
                  style={{marginLeft: 10}}>
                  received (offline)
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
        <Block
          row
          middle
          style={{
            flex: 0.5,
            paddingHorizontal: pxScale.wp(10),
          }}>
          <LinearGradient
            colors={['#34e89e', '#0f3443']}
            style={{width: 10, height: 10, borderRadius: 50}}
          />
          <CustomText
            color={Colors.Gray}
            weight={'500'}
            size={16}
            style={{marginLeft: 10}}>
            online
          </CustomText>
        </Block>
        <Block
          middle
          row
          space="between"
          style={{flex: 1, paddingHorizontal: pxScale.wp(10)}}>
          <CustomButton
            row
            center
            middle
            style={{
              backgroundColor: Colors.Pink,
              height: pxScale.hp(50),
              flex: 1,
              marginRight: pxScale.wp(20),
              borderRadius: pxScale.wp(50),
            }}>
            <AppSvg source={AppIcon.iconUp} width={16} height={16} />
            <CustomText
              style={{fontSize: 16, fontWeight: '700', marginLeft: 10}}>
              send
            </CustomText>
          </CustomButton>
          <CustomButton
            middle
            row
            center
            style={{
              backgroundColor: Colors.Blue_ice,
              height: pxScale.hp(50),
              borderRadius: pxScale.wp(50),
              flex: 1,
            }}>
            <AppSvg source={AppIcon.iconDown} width={16} height={16} />
            <CustomText
              style={{fontSize: 16, fontWeight: '700', marginLeft: 10}}>
              receive
            </CustomText>
          </CustomButton>
        </Block>
        <Block style={{flex: 11}}>
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
