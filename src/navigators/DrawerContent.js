import {isIphoneX} from 'react-native-iphone-x-helper';
import Block from '~components/Block';

import {
  StyleSheet,
  ScrollView,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import React from 'react';
import Insets from '~utils/insets';
import Colors from '~assets/colors';
import CustomText from '~components/CustomText';
import {coverAddress, pxScale} from '~utils/funcHelper';
import CustomButton from '~components/CustomButton';
import AppFastImage from '~components/AppFastImage';
import images from '~assets/images';
import AppSvg from '~components/AppSvg';
import {useSelector, useDispatch} from 'react-redux';
import {
  setActiveDrawer,
  setNetWorkActive,
  setActiveAccount,
} from '~redux/actions/ui';
import {AppIcon} from '~assets/svg';
import constants from '~constants';
import routes from '~constants/routes';
import {useNavigation} from '@react-navigation/native';
import {createAccountOfWallet} from '~redux/actions/user';
import {toast} from '~utils/ToastHelper';
import Clipboard from '@react-native-clipboard/clipboard';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function DrawerContent(props) {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const activeDrawer = useSelector(rootState => rootState?.activeDrawer);
  const activeAccount = useSelector(rootState => rootState?.activeAccount);
  const netWorkActive = useSelector(rootState => rootState?.netWorkActive);
  const listNetWorks = useSelector(rootState => rootState?.listNetWorks);
  const listAccounts = useSelector(rootState => rootState?.listAccounts);
  const token = useSelector(rootState => rootState?.token);

  const [showWallet, setShowWallet] = React.useState(false);
  const [showNetwork, setShowNetwork] = React.useState(false);

  const [activeChildren, setActiveChildren] =
    React.useState('Fahrenheit Chain');

  const [activeNetwork, setActiveNetwork] = React.useState(0);

  React.useEffect(() => {
    setActiveNetwork(netWorkActive);
  }, [netWorkActive]);

  const dataNetwork = [
    {
      id: 1,
      title: 'Fahrenheit Chain',
      icon: images.imageIconEllipse,
      value: 'FACscan',
    },
    {
      id: 1,
      title: 'Ethereum Main Network',
      icon: images.imageEth,
      value: 'Etherscan',
    },
    {id: 1, title: 'BSC', icon: images.imageBnb, value: 'BSCscan'},
  ];

  const createAccount = React.useCallback(async () => {
    try {
      await dispatch(createAccountOfWallet(token));
      await toast('Create Account Successful');
    } catch (e) {
      toast('Create Account Failed', e);
    }
  }, [dispatch, token]);

  const renderItemWallet = React.useCallback(
    (item, index) => {
      return (
        <CustomButton
          center
          middle
          key={index}
          style={{
            width: '100%',
            height: pxScale.hp(39),
            borderRadius: activeAccount._id === item._id ? pxScale.hp(10) : 0,
          }}
          onPress={() => {
            dispatch(setActiveAccount(item));
            toast('Copy Success');
            Clipboard.setString(item.address);
          }}>
          <CustomText
            color={activeAccount._id === item._id ? Colors.Pink : Colors.White}>
            Account {index + 1} {coverAddress(item.address, 5)}
          </CustomText>
        </CustomButton>
      );
    },
    [activeAccount, dispatch],
  );

  const renderItemNetwork = React.useCallback(
    (item, index) => {
      return (
        <CustomButton
          row
          middle
          key={index}
          style={{
            width: '100%',
            height: pxScale.hp(39),
            marginLeft: pxScale.wp(20),
            borderRadius:
              activeNetwork.chainId === item.chainId ? pxScale.hp(10) : 0,
          }}
          onPress={() => {
            dispatch(setNetWorkActive(item));
            setActiveNetwork(item);
            setActiveChildren(item.title);
          }}>
          <Block row style={{width: '85%'}}>
            {activeNetwork.chainId === item.chainId && (
              <Block
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 7,
                  marginLeft: 4,
                  width: pxScale.wp(10),
                  height: pxScale.hp(10),
                  borderRadius: pxScale.hp(50),
                  backgroundColor: Colors.Green_status,
                  alignItems: 'flex-end',
                  zIndex: 10000,
                }}
              />
            )}
            <AppFastImage
              source={
                item.chainId === 97
                  ? images.imageBnb
                  : item.chainId === 56
                  ? images.imageBnb
                  : images.imageIconEllipse
              }
              style={{
                width: pxScale.wp(19),
                height: pxScale.hp(20),
                borderRadius: 50,
              }}
            />

            <CustomText
              regular
              size={15}
              style={{marginLeft: pxScale.wp(10)}}
              color={activeNetwork === item.value ? Colors.Pink : Colors.White}>
              {item.name}
            </CustomText>
          </Block>
        </CustomButton>
      );
    },
    [activeNetwork, dispatch],
  );

  const _renderMenuFooter = () => {
    return routes.routesBottom.map((item, index) => (
      <CustomButton
        key={item.title}
        style={[
          styles.menuItem,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor:
              activeDrawer === item.id ? 'rgba(72, 204, 247, 0.1)' : null,
          },
        ]}
        onPress={() => {
          dispatch(setActiveDrawer(item.id));
          item.route && props.navigation.navigate(item.route);
        }}>
        <Block row>
          <Block row flex>
            <AppSvg source={item.icon} width={20} height={20} />
            <CustomText medium size={16} weight={'500'} style={styles.menuText}>
              {item.title}
            </CustomText>
          </Block>
        </Block>
      </CustomButton>
    ));
  };

  const _renderMenu = React.useCallback(() => {
    return routes.routesTop.map((item, index) => (
      <CustomButton
        key={item.title}
        style={[
          styles.menuItem,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor:
              activeDrawer === item.id ? 'rgba(241, 63, 149, 0.1)' : null,
          },
        ]}
        onPress={() => {
          if (item.title === 'Wallet') {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            setShowWallet(pre => !pre);
          } else if (item.title === 'Networks') {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            setShowNetwork(pre => !pre);
          } else {
            dispatch(setActiveDrawer(item.id));
            item.route && props.navigation.navigate(item.route);
          }
        }}>
        <Block row middle>
          <Block row flex middle>
            <AppSvg source={item.icon} width={20} height={20} />
            <Block>
              <CustomText
                medium
                size={16}
                weight={'500'}
                style={styles.menuText}>
                {item.value === 'view_on'
                  ? item.title + netWorkActive
                  : item.title}
              </CustomText>
              {item.children && (
                <CustomText
                  color={Colors.Pink}
                  style={{
                    marginLeft: pxScale.wp(10),
                    marginTop: pxScale.hp(2),
                  }}>
                  {activeChildren}
                </CustomText>
              )}
            </Block>
          </Block>

          {item.value === 'network' && (
            <CustomButton
              onPress={() => {
                setShowNetwork(pre => !pre);
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
              }}
              hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
              <AppSvg
                source={
                  showNetwork ? AppIcon.iconDropDownNew : AppIcon.iconDropRight
                }
                width={12}
                height={12}
              />
            </CustomButton>
          )}
          {item.value === 'wallet' && (
            <CustomButton
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                setShowWallet(pre => !pre);
              }}
              hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
              <AppSvg
                source={
                  showWallet ? AppIcon.iconDropDownNew : AppIcon.iconDropRight
                }
                width={12}
                height={12}
              />
            </CustomButton>
          )}
        </Block>

        {item.value === 'network' && showNetwork && (
          <Block style={{flex: 1, width: '100%', marginTop: pxScale.hp(5)}}>
            <ScrollView>
              {listNetWorks.map((itemNetwork, indexNetwork) =>
                renderItemNetwork(itemNetwork, indexNetwork),
              )}
            </ScrollView>
            <Block
              row
              middle
              style={{marginTop: pxScale.hp(6), marginLeft: pxScale.wp(20)}}>
              <CustomButton
                center
                middle
                style={{
                  width: pxScale.wp(161),
                  paddingHorizontal: pxScale.wp(15),
                  height: pxScale.hp(39),
                  borderRadius: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
                onPress={() => navigation.navigate('AddANetworkScreen')}>
                <CustomText
                  semiBold
                  color={Colors.White}
                  weight={'500'}
                  size={16}>
                  {constants.ADD_A_NETWORK}
                </CustomText>
              </CustomButton>
            </Block>
          </Block>
        )}

        {item.value === 'wallet' && showWallet && (
          <Block style={{flex: 1, width: '100%', marginTop: pxScale.hp(5)}}>
            <ScrollView>
              {listAccounts?.map((itemWallet, indexWallet) =>
                renderItemWallet(itemWallet, indexWallet),
              )}
            </ScrollView>
            <Block
              row
              center
              style={{
                marginTop: pxScale.hp(10),
                width: '100%',
              }}>
              <CustomButton
                center
                middle
                style={{
                  width: '35%',
                  height: pxScale.hp(35),
                  borderRadius: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  // borderWidth: 1,
                  // borderColor: 'rgba(72, 204, 247, 0.4)',
                  marginRight: pxScale.wp(7),
                }}
                onPress={() => {
                  createAccount();
                }}>
                <CustomText
                  semiBold
                  color={Colors.White}
                  weight={'500'}
                  size={16}>
                  {constants.CREATE}
                </CustomText>
              </CustomButton>
              <CustomButton
                center
                middle
                // onPress={() => navigation.navigate('ImportFromSeenScreen')}
                style={{
                  width: '35%',
                  height: pxScale.hp(35),
                  borderRadius: 10,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  // borderWidth: 1,
                  // borderColor: 'rgba(72, 204, 247, 0.4)',
                }}>
                <CustomText
                  semiBold
                  color={Colors.White}
                  weight={'500'}
                  size={16}>
                  {constants.IMPORT}
                </CustomText>
              </CustomButton>
            </Block>
          </Block>
        )}
      </CustomButton>
    ));
  }, [
    activeChildren,
    activeDrawer,
    createAccount,
    dataNetwork,
    dispatch,
    listAccounts,
    navigation,
    netWorkActive,
    props.navigation,
    renderItemNetwork,
    renderItemWallet,
    showNetwork,
    showWallet,
  ]);

  return (
    <Block style={styles.container}>
      <Block center middle>
        <Block
          middle
          center
          style={{
            backgroundColor: Colors.White,
            width: 80,
            height: 80,
            borderRadius: 500,
          }}>
          <AppFastImage
            source={images.imageIconAppRemove}
            style={{
              width: pxScale.wp(36),
              height: pxScale.hp(36),
            }}
          />
        </Block>
      </Block>

      <ScrollView style={styles.scrollView}>{_renderMenu()}</ScrollView>

      <Block row middle style={styles.viewFooter}>
        <Block style={styles.scrollView}>{_renderMenuFooter()}</Block>

        {/* <AppFastImage
          source={images.imageIconApp}
          style={{width: pxScale.wp(20), height: pxScale.hp(21)}}
        />
        <CustomText color={Colors.White} style={{marginLeft: pxScale.wp(10)}}>
          Where to buy FAC?
        </CustomText> */}
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? Insets.TOP : pxScale.hp(30),
    flex: 1,
    paddingBottom: isIphoneX() ? 10 : 5,
    backgroundColor: Colors.Background_block,
  },
  scrollView: {marginHorizontal: -10, flex: 1, marginTop: pxScale.hp(40)},
  menuItem: {
    paddingVertical: 13,
    paddingHorizontal: 25,
    // flexDirection: 'row',
    alignItems: 'center',
    width: '96%',
  },
  menuText: {
    letterSpacing: 1,
    // fontSize: pxScale.fontSize(16),
    // fontWeight: '400',
    color: Colors.White,
    marginLeft: pxScale.wp(10),
  },
  viewFooter: {marginBottom: pxScale.hp(40)},
});
