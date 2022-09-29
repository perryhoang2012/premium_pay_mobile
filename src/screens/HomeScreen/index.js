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
import {
  FlatList,
  LayoutAnimation,
  Platform,
  ScrollView,
  UIManager,
} from 'react-native';
import constants from '~constants';
import GetCoin from './components/GetCoin';
import AppFastImage from '~components/AppFastImage';
import images from '~assets/images';
import {useNavigation} from '@react-navigation/native';
import {Modal} from 'react-native';
import CustomInput from '~components/CustomInput';
import {Switch} from 'react-native';
import {Alert} from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const HomeScreen = () => {
  const navigation = useNavigation();
  const [showChildren, setShowChildren] = React.useState(false);

  const [closeGetCoin, setCloseGetCoin] = React.useState(false);

  const [showModalManagerTokenList, setShowModalManagerTokenList] =
    React.useState(false);

  const [showModalAddToken, setShowModalAddToken] = React.useState(false);

  const data = [
    {id: 1, value: '100 FAC', title: '$100', image: images.imageIconEllipse},
    {id: 2, value: '0 BNB', title: `-BNB`, image: images.imageBnb},
    {id: 3, value: '0 Ethereum', title: `-ETH`, image: images.imageEth},
  ];

  const dataToken = [
    {
      id: 1,
      title: '123 FAC',
      value: '$100',
    },
    {
      id: 2,
      title: '123 FAC',
      value: '$100',
    },
    {
      id: 3,
      title: '123 FAC',
      value: '$100',
    },
    {
      id: 4,
      title: '123 FAC',
      value: '$100',
    },
  ];

  const dataChild = [
    {
      id: 1,
      value: '- 0.039997 FAC',
      value2: '- 0.03 USD',
      type: 'Send',
      subTitle: 'Send (max privacy)',
      icon: AppIcon.iconArrowSendMax,
    },
    {
      id: 2,
      value: '- 0.01 FAC',
      value2: '- 0.01 USD',
      type: 'Send',
      subTitle: 'Send (offline)',
      icon: AppIcon.iconArrowSendOffline,
    },
    {
      id: 3,
      value: '- 0.01 FAC',
      value2: '- 0.01 USD',
      type: 'Send',
      subTitle: 'Send',
      icon: AppIcon.iconArrowSend,
    },
    {
      id: 4,
      value: '+ 0.08 FAC',
      value2: '+ 0.06 USD',
      type: 'Receive',
      subTitle: 'Receive',
      icon: AppIcon.iconArrowReceive,
    },
    {
      id: 5,
      value: '- 0.01 FAC',
      value2: '- 0.01 USD',
      type: 'Send',
      subTitle: 'Send',
      icon: AppIcon.iconArrowSend,
    },
    {
      id: 6,
      value: '+ 0.08 FAC',
      value2: '+ 0.06 USD',
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
        <Block
          style={style.containerItem}
          // onPress={() => {
          //   LayoutAnimation.configureNext(
          //     LayoutAnimation.Presets.easeInEaseOut,
          //   );
          //   setShowChildren(pre => !pre);
          // }}
        >
          {/* <Block row space={'between'}>
            <CustomText letterSpacing={1} color={Colors.Gray}>
              {constants.AVAILABLE}
            </CustomText>
            <AppSvg source={AppIcon.iconDropDown} width={14} height={14} />
          </Block> */}

          <Block row>
            <Block style={{marginTop: pxScale.hp(4)}}>
              <AppFastImage source={item.image} style={style.imageIconItem} />
            </Block>
            <Block style={{marginLeft: pxScale.hp(10)}}>
              <CustomText size={20} color={Colors.White}>
                {item.value}
              </CustomText>
              <CustomText
                style={{marginTop: pxScale.hp(4)}}
                size={14}
                color={Colors.Gray}>
                {item.title}
              </CustomText>
            </Block>
          </Block>
        </Block>

        <CustomButton
          row
          center
          middle
          style={{paddingVertical: 20}}
          onPress={() => setShowModalManagerTokenList(true)}>
          <AppSvg source={AppIcon.iconSettingSwitch} width={20} height={20} />
          <CustomText
            color={Colors.White}
            size={14}
            style={{marginLeft: pxScale.wp(10)}}>
            {constants.MANAGER_TOKEN_LIST}
          </CustomText>
        </CustomButton>

        <Block style={{marginTop: 24}}>
          <Block row space="between">
            <CustomText
              color={Colors.White}
              size={16}
              weight={'700'}
              letterSpacing={2}>
              {constants.TRANSACTION}
            </CustomText>
            <CustomText
              color={Colors.Pink}
              weight={'500'}
              customFont="Bold"
              style={{marginLeft: pxScale.wp(10)}}>
              {constants.ADDRESS_DETAILS}
            </CustomText>
          </Block>
          <Block
            style={{
              marginTop: pxScale.hp(12),
              marginBottom: pxScale.hp(12),
              borderRadius: 10,
            }}>
            {dataChild.map((itemChild, indexChild) =>
              _renderItemChild(itemChild, indexChild),
            )}
          </Block>
        </Block>
      </>
    );
  };

  const _renderInputAddToken = () => {
    const input = [
      {title: 'TOKEN ADDRESS', value: '', type: 'Paste'},
      {title: 'TOKEN DECIMAL', value: ''},
      {title: 'TOKEN SYMBOL', value: ''},
    ];

    return input.map((item, index) => (
      <Block key={index}>
        <CustomText color={Colors.White}>{item.title}</CustomText>
        <Block
          row
          middle
          center
          style={{
            backgroundColor: Colors.Background_button,
            marginTop: pxScale.hp(8),
            height: pxScale.hp(48),
            borderRadius: pxScale.hp(10),
            marginBottom: pxScale.hp(20),
          }}>
          <Block flex>
            <CustomInput style={{width: '100%'}} />
          </Block>

          {item.type === 'Paste' && (
            <CustomButton
              style={{
                backgroundColor: 'rgba(241, 63, 149, 0.2)',
                padding: 7,
                borderRadius: pxScale.hp(10),
                marginRight: pxScale.wp(10),
              }}>
              <CustomText size={12} color={Colors.Pink}>
                Paste
              </CustomText>
            </CustomButton>
          )}
        </Block>
      </Block>
    ));
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
            backgroundColor:
              index % 2 === 0 ? '#111010' : Colors.Background_button,
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

  const _renderItemToken = ({item}) => {
    return (
      <Block
        style={[
          {
            flex: 1,
            flexDirection: 'row',
            marginTop: pxScale.hp(10),
            width: '100%',
            alignItems: 'center',
            // justifyContent: 'center',
            height: pxScale.hp(70),
            borderRadius: pxScale.hp(12),
            paddingHorizontal: pxScale.wp(16),
            backgroundColor: Colors.Background_button,
          },
        ]}>
        <Block flex>
          <Block
            center
            middle
            style={{
              backgroundColor: Colors.White,
              borderRadius: 50,
              padding: 6,
              width: pxScale.wp(35),
              height: pxScale.hp(35),
            }}>
            <AppFastImage
              resizeMode="contain"
              source={images.imageIconAppRemove}
              style={{width: 20, height: 20}}
            />
          </Block>
        </Block>

        <Block style={{flex: 4}}>
          <CustomText color={Colors.White} size={16}>
            {item.title}
          </CustomText>
          <CustomText color={Colors.Gray} size={14}>
            {item.value}
          </CustomText>
        </Block>

        <CustomButton
          center
          middle
          style={{
            width: 30,
            height: 30,
            borderRadius: 6,
            borderColor: Colors.Background_block,
            borderWidth: 1,
          }}
          onPress={() =>
            Alert.alert('Delete token', 'Are you sure you want to delete it?', [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ])
          }>
          <AppSvg source={AppIcon.iconCancel} width={12} height={12} />
        </CustomButton>

        {/* <Switch
          trackColor={{
            false: Colors.Gradient_end,
            true: Colors.Gradient_start,
          }}
          thumbColor={Colors.White}
          ios_backgroundColor={Colors.Gray}
          style={style.switch}
        /> */}
      </Block>
    );
  };
  return (
    <LinearGradient
      colors={[
        Colors.Gradient_start,
        Colors.Gradient_end,
        Colors.Gradient_end,
        Colors.Gradient_end,
      ]}
      style={style.linearGradient}>
      <HeaderDrawer title={'WALLET'} />
      <Block style={style.body}>
        <Block row middle style={style.viewStatus}>
          <Block style={style.gradientDot} />
          <CustomText
            color={Colors.Gray}
            weight={'400'}
            size={16}
            style={style.textStatus}>
            {constants.ONLINE}
          </CustomText>
        </Block>
        <Block middle row space="between" style={style.viewDoubleButton}>
          <CustomButton
            row
            center
            middle
            style={style.buttonSendAndReceive}
            onPress={() => goToSend()}>
            <AppSvg source={AppIcon.iconUp} width={16} height={16} />
            <CustomText
              color={Colors.Black}
              style={style.textButton}
              weight={'600'}>
              {constants.SEND}
            </CustomText>
          </CustomButton>
          <CustomButton
            middle
            row
            center
            style={style.buttonSendAndReceive}
            onPress={() => goToReceive()}>
            <AppSvg source={AppIcon.iconDown} width={16} height={16} />
            <CustomText
              color={Colors.Black}
              style={style.textButton}
              weight={'600'}>
              {constants.RECEIVE}
            </CustomText>
          </CustomButton>
        </Block>
        {/* {!closeGetCoin && <GetCoin toggleGetCoin={toggleGetCoin} />} */}
        <Block style={style.viewScrollView}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={_renderItemHome}
            keyExtractor={item => item.id}
          />
        </Block>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModalManagerTokenList}
          onRequestClose={() => {
            setShowModalManagerTokenList(false);
          }}>
          <Block style={style.centeredView}>
            <Block style={style.modalView}>
              <Block
                row
                space={'between'}
                style={{width: '100%', marginTop: pxScale.hp(11)}}>
                <CustomButton
                  onPress={() => setShowModalManagerTokenList(false)}>
                  <AppSvg source={AppIcon.iconCancel} width={14} height={14} />
                </CustomButton>
                <CustomText color={Colors.White} size={16} weight={'500'}>
                  {constants.MANAGER_TOKEN_LIST}
                </CustomText>
                <CustomButton
                  onPress={() => {
                    setShowModalManagerTokenList(false);
                    setShowModalAddToken(true);
                  }}>
                  <AppSvg source={AppIcon.iconPlus} width={14} height={14} />
                </CustomButton>
              </Block>
              <Block
                row
                style={{
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  height: pxScale.hp(40),
                  width: '100%',
                  paddingHorizontal: pxScale.hp(20),
                  backgroundColor: Colors.Background_button,
                  borderRadius: pxScale.hp(10),
                  marginTop: pxScale.hp(20),
                }}>
                <AppSvg source={AppIcon.iconSearch} width={20} height={20} />
                <CustomInput
                  placeholder={constants.SEARCH}
                  onChangeText={() => console.log('hihi')}
                  style={{color: Colors.White}}
                />
              </Block>
              <Block
                style={[
                  style.viewScrollView,
                  {
                    marginTop: pxScale.hp(20),
                    width: '100%',
                  },
                ]}>
                <FlatList
                  showsVerticalScrollIndicator={false}
                  data={dataToken}
                  renderItem={_renderItemToken}
                  keyExtractor={item => item.id}
                />
              </Block>
            </Block>
          </Block>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={showModalAddToken}
          onRequestClose={() => {
            setShowModalAddToken(false);
          }}>
          <Block style={style.centeredView}>
            <Block style={style.modalView}>
              <Block
                row
                space={'between'}
                style={{width: '100%', marginTop: pxScale.hp(11)}}>
                <CustomButton onPress={() => setShowModalAddToken(false)}>
                  <AppSvg source={AppIcon.iconCancel} width={14} height={14} />
                </CustomButton>
                <CustomText color={Colors.White} size={16} weight={'500'}>
                  {constants.ADD_TOKEN_METADATA}
                </CustomText>
                <AppSvg source={AppIcon.iconPlus} width={14} height={14} />
              </Block>
              <Block style={{marginTop: pxScale.hp(28)}}>
                <AppSvg source={AppIcon.iconPlusPink} width={80} height={80} />
              </Block>
              <Block style={{width: '100%', flex: 3}}>
                {_renderInputAddToken()}
              </Block>
              <Block flex style={{width: '100%', marginTop: pxScale.hp(50)}}>
                {/* <Block
                  row
                  middle
                  style={{
                    backgroundColor: Colors.Background_item,
                    width: '100%',
                    height: pxScale.hp(44),
                    paddingHorizontal: pxScale.wp(20),
                    borderRadius: pxScale.hp(15),
                  }}>
                  <AppSvg
                    source={AppIcon.iconInfoCircle}
                    width={20}
                    height={20}
                  />
                  <CustomText
                    color={Colors.White}
                    size={14}
                    style={{marginLeft: pxScale.wp(10)}}>
                    This will cost 0.00204 FAC
                  </CustomText>
                </Block> */}
                <Block
                  row
                  flex
                  style={{width: '100%', marginTop: pxScale.hp(20)}}
                  space={'between'}>
                  <CustomButton
                    center
                    middle
                    style={{
                      backgroundColor: Colors.Background_button,
                      height: pxScale.hp(43),
                      width: '45%',
                      borderRadius: pxScale.wp(10),
                    }}>
                    <CustomText size={16} weight={'600'} color={Colors.White}>
                      {constants.CANCEL}
                    </CustomText>
                  </CustomButton>
                  <CustomButton
                    center
                    middle
                    onGradient
                    style={{
                      height: pxScale.hp(43),
                      width: '45%',
                      borderRadius: pxScale.wp(10),
                      backgroundColor: Colors.White,
                    }}>
                    <CustomText size={16} weight={'600'} color={Colors.Black}>
                      {constants.SAVE}
                    </CustomText>
                  </CustomButton>
                </Block>
              </Block>
            </Block>
          </Block>
        </Modal>
      </Block>
    </LinearGradient>
  );
};

export default HomeScreen;
