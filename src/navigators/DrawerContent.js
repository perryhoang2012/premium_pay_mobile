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
import {setActiveDrawer, setActiveWallet} from '~redux/actions/ui';
import {AppIcon} from '~assets/svg';
import constants from '~constants';
import routes from '~constants/routes';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function DrawerContent(props) {
  const dispatch = useDispatch();

  const activeDrawer = useSelector(rootState => rootState?.activeDrawer);
  const activeWallet = useSelector(rootState => rootState?.activeWallet);

  const [showWallet, setShowWallet] = React.useState(false);

  const dataWallet = [
    {id: 1, name: 'Account 1 (0xDeEb...367)'},
    {id: 2, name: 'Account 2 (0xDeEb...256)'},
    {id: 3, name: 'Account 3 (0xDeEb...341)'},
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
                  showWallet ? AppIcon.iconDropDown : AppIcon.iconDropRight
                }
                width={12}
                height={12}
              />
            </CustomButton>
          )}
        </Block>

        {item.value === 'wallet' && showWallet && (
          <Block style={{flex: 1, width: '100%', marginTop: pxScale.hp(5)}}>
            <ScrollView>
              {dataWallet.map((item, index) => renderItemWallet(item, index))}
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
                }}>
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
  };

  const _renderMenu = () => {
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
        <Block row>
          <Block row flex>
            <AppSvg source={item.icon} width={20} height={20} />
            <CustomText style={styles.menuText}>{item.title}</CustomText>
          </Block>
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
                  showWallet ? AppIcon.iconDropDown : AppIcon.iconDropRight
                }
                width={12}
                height={12}
              />
            </CustomButton>
          )}
        </Block>

        {item.value === 'wallet' && showWallet && (
          <Block style={{flex: 1, width: '100%', marginTop: pxScale.hp(5)}}>
            <ScrollView>
              {dataWallet.map((item, index) => renderItemWallet(item, index))}
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
                }}>
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
  };

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
          Where to buy Fac?
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
