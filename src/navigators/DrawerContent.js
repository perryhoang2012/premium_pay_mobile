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
import {pxScale} from '~utils/funcHelper';
import CustomButton from '~components/CustomButton';
import AppFastImage from '~components/AppFastImage';
import images from '~assets/images';
import AppSvg from '~components/AppSvg';
import {useSelector, useDispatch} from 'react-redux';
import {
  setActiveDrawer,
  setActiveWallet,
  setNetWorkActive,
} from '~redux/actions/ui';
import {AppIcon} from '~assets/svg';
import constants from '~constants';
import routes from '~constants/routes';
import {useNavigation} from '@react-navigation/native';

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
  const activeWallet = useSelector(rootState => rootState?.activeWallet);
  const netWorkActive = useSelector(rootState => rootState?.netWorkActive);

  const [showWallet, setShowWallet] = React.useState(false);
  const [showNetwork, setShowNetwork] = React.useState(false);

  const [activeChildren, setActiveChildren] =
    React.useState('Fahrenheit Chain');

  const [activeNetwork, setActiveNetwork] = React.useState(0);

  const dataWallet = [
    {id: 1, name: 'Account 1 (0xDeEb...367)'},
    {id: 2, name: 'Account 2 (0xDeEb...256)'},
    {id: 3, name: 'Account 3 (0xDeEb...341)'},
  ];

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
      icon: images.imageBnb,
      value: 'Etherscan',
    },
    {id: 1, title: 'BSC', icon: images.imageEth, value: 'BSCscan'},
  ];

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

            borderRadius: activeWallet === index ? pxScale.hp(10) : 0,
          }}
          onPress={() => dispatch(setActiveWallet(index))}>
          <CustomText
            color={activeWallet === index ? Colors.White : Colors.Blue_ice}>
            {item.name}
          </CustomText>
        </CustomButton>
      );
    },
    [activeWallet, dispatch],
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
            borderRadius: activeNetwork === index ? pxScale.hp(10) : 0,
          }}
          onPress={() => {
            dispatch(setNetWorkActive(item.value));
            setActiveNetwork(index);
            setActiveChildren(item.title);
          }}>
          <Block row style={{width: '85%'}}>
            <AppFastImage
              resizeMode="contain"
              source={item.icon}
              style={{width: pxScale.wp(23), height: pxScale.hp(20)}}
            />
            <CustomText
              style={{marginLeft: pxScale.wp(10)}}
              color={activeNetwork === index ? Colors.White : Colors.Blue_ice}>
              {item.title}
            </CustomText>
          </Block>
          {activeNetwork === index && (
            <Block
              style={{
                width: pxScale.wp(12),
                height: pxScale.hp(12),
                borderRadius: pxScale.hp(50),
                backgroundColor: Colors.Green_status,
                alignItems: 'flex-end',
                // marginLeft: pxScale.wp(140),
              }}
            />
          )}
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
            <CustomText style={styles.menuText}>{item.title}</CustomText>
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
              activeDrawer === item.id ? 'rgba(72, 204, 247, 0.1)' : null,
          },
        ]}
        onPress={() => {
          dispatch(setActiveDrawer(item.id));
          item.route && props.navigation.navigate(item.route);
        }}>
        <Block row middle>
          <Block row flex middle>
            <AppSvg source={item.icon} width={20} height={20} />
            <Block>
              <CustomText style={styles.menuText}>
                {item.value === 'view_on'
                  ? item.title + netWorkActive
                  : item.title}
              </CustomText>
              {item.children && (
                <CustomText
                  color={Colors.Blue_ice}
                  style={{marginLeft: pxScale.wp(6), marginTop: pxScale.hp(2)}}>
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
              {dataNetwork.map((itemNetwork, indexNetwork) =>
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
                  paddingHorizontal: pxScale.wp(15),
                  height: pxScale.hp(39),
                  borderRadius: 50,
                  backgroundColor: Colors.Gradient_start,
                  borderWidth: 1,
                  borderColor: 'rgba(72, 204, 247, 0.4)',
                }}
                onPress={() => navigation.navigate('AddANetworkScreen')}>
                <CustomText color={Colors.White} weight={'500'} size={15}>
                  {constants.ADD_A_NETWORK}
                </CustomText>
              </CustomButton>
            </Block>
          </Block>
        )}

        {item.value === 'wallet' && showWallet && (
          <Block style={{flex: 1, width: '100%', marginTop: pxScale.hp(5)}}>
            <ScrollView>
              {dataWallet.map((itemWallet, indexWallet) =>
                renderItemWallet(itemWallet, indexWallet),
              )}
            </ScrollView>
            <Block row middle center style={{marginTop: pxScale.hp(10)}}>
              <CustomButton
                center
                middle
                style={{
                  width: '35%',
                  height: pxScale.hp(35),
                  borderRadius: 50,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderWidth: 1,
                  borderColor: 'rgba(72, 204, 247, 0.4)',
                  marginRight: pxScale.wp(30),
                }}
                onPress={() => navigation.navigate('CreateNewWallet')}>
                <CustomText color={Colors.White} weight={'500'} size={15}>
                  {constants.CREATE}
                </CustomText>
              </CustomButton>
              <CustomButton
                center
                middle
                style={{
                  width: '35%',
                  height: pxScale.hp(35),
                  borderRadius: 50,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderWidth: 1,
                  borderColor: 'rgba(72, 204, 247, 0.4)',
                }}>
                <CustomText color={Colors.White} weight={'500'} size={15}>
                  {constants.IMPORT}
                </CustomText>
              </CustomButton>
            </Block>
          </Block>
        )}
      </CustomButton>
    ));
  }, [
    activeDrawer,
    dataNetwork,
    dataWallet,
    dispatch,
    navigation,
    props.navigation,
    renderItemNetwork,
    renderItemWallet,
    showNetwork,
    showWallet,
  ]);

  return (
    <Block style={styles.container}>
      <Block middle center>
        <AppFastImage
          source={images.imageIconApp}
          style={{width: pxScale.wp(73), height: pxScale.hp(70)}}
        />
      </Block>

      <ScrollView style={styles.scrollView}>{_renderMenu()}</ScrollView>

      <Block row middle style={styles.viewFooter}>
        <ScrollView style={styles.scrollView}>{_renderMenuFooter()}</ScrollView>

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
    backgroundColor: Colors.Gradient_start,
  },
  scrollView: {marginHorizontal: -10, flex: 1, marginTop: pxScale.hp(30)},
  menuItem: {
    paddingVertical: 13,
    paddingHorizontal: 25,
    // flexDirection: 'row',
    alignItems: 'center',
    width: '96%',
  },
  menuText: {
    letterSpacing: 1,
    fontSize: pxScale.fontSize(16),
    fontWeight: '400',
    color: Colors.White,
    marginLeft: pxScale.wp(6),
  },
  viewFooter: {marginBottom: pxScale.hp(40)},
});
