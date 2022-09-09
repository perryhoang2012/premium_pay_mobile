import {StyleSheet} from 'react-native';
import Colors from '~assets/colors';
import {pxScale} from '~utils/funcHelper';
import Insets from '~utils/insets';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: pxScale.wp(12),
    // paddingRight: pxScale.wp(12),
  },
  container: {
    flex: 1,
  },
  textTitleHeader: {
    fontSize: 20,
  },
  body: {
    flex: 1,
    paddingLeft: pxScale.wp(12),
  },
  viewStatus: {
    paddingHorizontal: pxScale.wp(10),
  },
  gradientDot: {
    width: pxScale.wp(12),
    height: pxScale.hp(12),
    borderRadius: pxScale.hp(50),
    backgroundColor: Colors.Green_status,
  },
  textStatus: {
    marginLeft: pxScale.wp(10),
  },
  scrollStyle: {
    // justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 16,
    fontWeight: 'normal',
    fontFamily: 'Rubik-Bold',
  },
  underlineStyle: {
    height: 3,
    backgroundColor: Colors.Blue_ice,
    borderRadius: 3,
  },
  viewItem: {
    height: pxScale.hp(420),
    backgroundColor: Colors.Background_item,
    padding: 20,
    borderRadius: pxScale.hp(12),
    marginBottom: pxScale.hp(16),
    marginTop: pxScale.hp(10),
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    paddingRight: pxScale.wp(20),
  },
  viewUnderlined: {
    marginTop: pxScale.hp(5),
    backgroundColor: Colors.Blue_ice,
  },
});
