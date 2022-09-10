import React from 'react';
import style from './style';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import {HeaderDrawer, ButtonGradient, CustomButton} from '~components';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';
import {pxScale} from '~utils/funcHelper';
import {FlatList, LayoutAnimation, Platform, UIManager} from 'react-native';
import constants from '~constants';
import GetCoin from './components/GetCoin';
import AppFastImage from '~components/AppFastImage';
import images from '~assets/images';
import {useNavigation} from '@react-navigation/native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const HomeScreen = () => {
  const navigation = useNavigation();
  const [showChildren, setShowChildren] = React.useState(false);

  const [closeGetCoin, setCloseGetCoin] = React.useState(false);
  const data = [
    {id: 1, value: '0 PPAY', title: '-PPAY', image: images.imageIconApp},
    {id: 2, value: '0 BNB', title: `-BNB`, image: images.imageBnb},
    {id: 3, value: '0 Ethereum', title: `-ETH`, image: images.imageEth},
  ];

  const dataChild = [
    {
      id: 1,
      value: '-0.039997 PPAY',
      value2: '-0.03 USD',
      type: 'Send',
      subTitle: 'Send (max privacy)',
      icon: AppIcon.iconArrowSendMax,
    },
    {
      id: 2,
      value: '-0.01 PPAY',
      value2: '-0.01 USD',
      type: 'Send',
      subTitle: 'Send (offline)',
      icon: AppIcon.iconArrowSendOffline,
    },
    {
      id: 3,
      value: '-0.01 PPAY',
      value2: '-0.01 USD',
      type: 'Send',
      subTitle: 'Send',
      icon: AppIcon.iconArrowSend,
    },
    {
      id: 4,
      value: '+0.08 PPAY',
      value2: '+0.06 USD',
      type: 'Receive',
      subTitle: 'Receive',
      icon: AppIcon.iconArrowReceive,
    },
    {
      id: 5,
      value: '-0.01 PPAY',
      value2: '-0.01 USD',
      type: 'Send',
      subTitle: 'Send',
      icon: AppIcon.iconArrowSend,
    },
    {
      id: 6,
      value: '+0.08 PPAY',
      value2: '+0.06 USD',
      type: 'Receive',
      subTitle: 'Receive',
      icon: AppIcon.iconArrowReceive,
    },
  ];

  const toggleGetCoin = () => {
    setCloseGetCoin(true);
  };

  const goToSend = () => {
    navigation.navigate('SendScreen');
  };
  const goToReceive = () => {
    navigation.navigate('ReceiveScreen');
  };

  const goToDetail = () => {
    navigation.navigate('TransactionDetailScreen');
  };

  const _renderItemHome = ({item}) => {
    return (
      <>
        <CustomButton
          style={style.containerItem}
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            setShowChildren(pre => !pre);
          }}>
          <Block row space={'between'}>
            <CustomText letterSpacing={1} color={Colors.Gray}>
              {constants.AVAILABLE}
            </CustomText>
            <AppSvg source={AppIcon.iconDropDown} width={14} height={14} />
          </Block>
          <Block row style={{marginTop: 10}}>
            <AppFastImage source={item.image} style={style.imageIconItem} />
            <Block style={{marginLeft: 10}}>
              <CustomText size={20} color={Colors.White}>
                {item.value}
              </CustomText>
              <CustomText size={14} color={Colors.Gray}>
                {item.title}
              </CustomText>
            </Block>
          </Block>
        </CustomButton>

        {showChildren && (
          <Block style={{marginTop: 24}}>
            <Block row space="between">
              <CustomText
                color={Colors.White}
                size={16}
                weight={'500'}
                letterSpacing={2}>
                {constants.TRANSACTION}
              </CustomText>
              <CustomText
                color={Colors.Blue_ice}
                weight={'500'}
                customFont="Bold"
                style={{marginLeft: pxScale.wp(10)}}>
                {constants.ADDRESS_DETAILS}
              </CustomText>
            </Block>
            <Block style={{marginTop: pxScale.hp(12)}}>
              {dataChild.map((itemChild, indexChild) =>
                _renderItemChild(itemChild, indexChild),
              )}
            </Block>
          </Block>
        )}
      </>
    );
  };

  const _renderItemChild = (item, index) => {
    return (
      <CustomButton
        onPress={() => goToDetail()}
        row
        key={index}
        space={'between'}
        style={[
          style.viewItemChild,
          {
            backgroundColor: index % 2 === 0 ? Colors.Background_item : null,
            borderTopLeftRadius: index === 0 ? 12 : 0,
            borderTopRightRadius: index === 0 ? 12 : 0,
            borderBottomLeftRadius: index === dataChild.length - 1 ? 12 : 0,
            borderBottomRightRadius: index === dataChild.length - 1 ? 12 : 0,
          },
        ]}>
        <Block row middle>
          <AppSvg source={item.icon} width={15} height={15} />
          <Block style={{marginLeft: pxScale.wp(5)}}>
            <CustomText size={16} weight={'500'} color={Colors.White}>
              {item.type}
            </CustomText>
            <CustomText size={14} weight={'400'} color={Colors.White}>
              {item.subTitle}
            </CustomText>
          </Block>
        </Block>
        <Block>
          <CustomText size={16} weight={'500'} color={Colors.White}>
            {item.value}
          </CustomText>
          <CustomText
            style={style.textRight}
            size={14}
            weight={'400'}
            color={Colors.White}>
            {item.value2}
          </CustomText>
        </Block>
      </CustomButton>
    );
  };
  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={style.linearGradient}>
      <HeaderDrawer title={'WALLET'} />
      <Block style={style.body}>
        <Block row middle style={style.viewStatus}>
          <Block style={style.gradientDot} />
          <CustomText
            color={Colors.Gray}
            weight={'500'}
            size={16}
            style={style.textStatus}>
            {constants.ONLINE}
          </CustomText>
        </Block>
        <Block middle row space="between" style={style.viewDoubleButton}>
          <ButtonGradient
            onGradient
            row
            center
            middle
            style={style.buttonSendAndReceive}
            onPress={() => goToSend()}>
            <AppSvg source={AppIcon.iconUp} width={16} height={16} />
            <CustomText
              color={Colors.White}
              style={style.textButton}
              weight={'500'}>
              {constants.SEND}
            </CustomText>
          </ButtonGradient>
          <ButtonGradient
            onGradient
            middle
            row
            center
            style={style.buttonSendAndReceive}
            onPress={() => goToReceive()}>
            <AppSvg source={AppIcon.iconDown} width={16} height={16} />
            <CustomText
              color={Colors.White}
              style={style.textButton}
              weight={'500'}>
              {constants.RECEIVE}
            </CustomText>
          </ButtonGradient>
        </Block>
        {!closeGetCoin && <GetCoin toggleGetCoin={toggleGetCoin} />}
        <Block style={style.viewScrollView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={_renderItemHome}
            keyExtractor={item => item.id}
          />
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default HomeScreen;
