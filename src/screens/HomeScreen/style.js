import {StyleSheet} from 'react-native';
import Colors from '~assets/colors';
import {pxScale} from '~utils/funcHelper';

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.Yellow,
    width: pxScale.wp(100),
    height: pxScale.hp(40),
    borderRadius: pxScale.hp(6),
    marginTop: pxScale.hp(5),
  },
  linearGradient: {
    flex: 1,
    paddingLeft: pxScale.wp(12),
    paddingRight: pxScale.wp(12),
  },
  body: {
    flex: 1,
  },
  buttonSendAndReceive: {
    height: pxScale.hp(40),
    flex: 1,
    marginRight: pxScale.wp(20),
    borderRadius: pxScale.wp(50),
  },

  viewItem: {
    padding: pxScale.hp(10),
    borderRadius: pxScale.hp(10),
    marginBottom: pxScale.hp(10),
    paddingVertical: pxScale.hp(30),
  },
  viewStatus: {
    flex: 0.5,
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
  viewDoubleButton: {
    flex: 1,
    paddingHorizontal: pxScale.wp(10),
  },
  textButton: {
    fontSize: pxScale.fontSize(16),
    marginLeft: pxScale.wp(10),
  },

  viewScrollView: {
    flex: 10,
  },
  letterSpacingText: {
    letterSpacing: 2,
  },
  viewAssets: {
    paddingHorizontal: pxScale.wp(10),
  },
  viewTitleAssets: {
    marginBottom: pxScale.hp(10),
  },
  marginLeftStyle: {
    marginLeft: pxScale.wp(10),
  },
  textRight: {
    flex: 1,
    textAlign: 'right',
  },
  viewLock: {
    marginLeft: pxScale.wp(20),
    marginTop: pxScale.hp(6),
  },
  viewTitleTransition: {
    marginBottom: pxScale.hp(10),
    paddingHorizontal: pxScale.wp(10),
  },
  marginTopView: {
    marginTop: pxScale.hp(20),
  },

  containerItem: {
    backgroundColor: Colors.Background_item,
    padding: pxScale.hp(20),
    borderRadius: pxScale.wp(12),
    marginTop: pxScale.hp(10),
    borderColor: Colors.Border_Gray,
    borderWidth: 1,
  },

  viewItemChild: {
    padding: pxScale.wp(12),
    borderColor: Colors.Border_Gray,
    borderWidth: 1,
  },

  imageIconItem: {width: pxScale.wp(16), height: pxScale.hp(16)},
});
