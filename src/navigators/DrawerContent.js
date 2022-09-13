import {isIphoneX} from 'react-native-iphone-x-helper';
import Block from '~components/Block';
import routes from '../constants/routes';
import {StyleSheet, ScrollView} from 'react-native';
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
import {setActiveDrawer} from '~redux/actions/ui';

export default function DrawerContent(props) {
  const dispatch = useDispatch();

  const activeDrawer = useSelector(rootState => rootState?.activeDrawer);

  const _renderMenu = () => {
    return routes.map((item, index) => (
      <CustomButton
        key={item.title}
        style={[
          styles.menuItem,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor:
              activeDrawer === index ? 'rgba(72, 204, 247, 0.1)' : null,
          },
        ]}
        onPress={() => {
          dispatch(setActiveDrawer(index));
          item.route && props.navigation.navigate(item.route);
        }}>
        <AppSvg source={item.icon} width={20} height={20} />
        <CustomText style={styles.menuText}>{item.title}</CustomText>
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
        <AppFastImage
          source={images.imageIconApp}
          style={{width: pxScale.wp(20), height: pxScale.hp(21)}}
        />
        <CustomText color={Colors.White} style={{marginLeft: pxScale.wp(10)}}>
          Where to buy Fac?
        </CustomText>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Insets.TOP,
    flex: 1,
    paddingBottom: isIphoneX() ? 10 : 5,
    backgroundColor: Colors.Gradient_start,
  },
  scrollView: {marginHorizontal: -10, flex: 1, marginTop: pxScale.hp(30)},
  menuItem: {
    paddingVertical: 13,
    paddingHorizontal: 25,
    flexDirection: 'row',
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
  viewFooter: {padding: 20},
});
