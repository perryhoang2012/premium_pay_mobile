import {StyleSheet} from 'react-native';
import Colors from '~assets/colors';
import {pxScale} from '~utils/funcHelper';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: pxScale.wp(12),
  },
  container: {
    flex: 1,
  },
  textTitleHeader: {
    fontSize: pxScale.fontSize(20),
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
    marginTop: pxScale.hp(4),
  },
  textStatus: {
    marginLeft: pxScale.wp(10),
    width: pxScale.wp(250),
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
    // height: pxScale.hp(64),
    backgroundColor: Colors.Background_item,
    padding: pxScale.hp(20),
    borderColor: Colors.Border_Gray,
    borderWidth: 1,
    paddingVertical: pxScale.hp(12),
  },
  viewUnderlined: {
    marginTop: pxScale.hp(5),
    backgroundColor: Colors.Blue_ice,
  },
  viewScrollView: {marginTop: pxScale.hp(20), marginBottom: pxScale.hp(10)},
  viewContent: {
    borderRadius: pxScale.hp(10),
    marginRight: pxScale.wp(15),
    flex: 1,
  },
});
