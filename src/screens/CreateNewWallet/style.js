import {StyleSheet} from 'react-native';
import Colors from '~assets/colors';
import {pxScale} from '~utils/funcHelper';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  textTitle: {
    fontWeight: '500',
    marginLeft: pxScale.wp(4),
    letterSpacing: 2,
    fontSize: pxScale.fontSize(20),
    color: Colors.White,
  },
  viewItemSendPhase: {
    width: pxScale.wp(120),
    height: pxScale.hp(40),
    marginBottom: pxScale.hp(10),
    marginLeft: pxScale.hp(30),
    marginRight: pxScale.hp(30),
    backgroundColor: Colors.Background_item,
    borderRadius: pxScale.hp(12),
    marginTop: pxScale.hp(10),
    borderColor: Colors.Border_Gray,
    borderWidth: 1,
    padding: pxScale.wp(10),
  },

  viewNumber: {
    backgroundColor: Colors.Blue_ice,
    width: pxScale.wp(20),
    height: pxScale.hp(20),
    borderRadius: pxScale.wp(10),
  },

  viewMarginLeft: {marginLeft: pxScale.wp(10)},

  inputConfirm: {width: pxScale.wp(90), color: Colors.White},

  textCenter: {textAlign: 'center', marginHorizontal: pxScale.wp(10)},

  viewStepOne: {marginTop: pxScale.hp(20), padding: pxScale.wp(10)},

  viewContentStepOne: {
    marginTop: pxScale.hp(35),
    paddingLeft: pxScale.wp(10),
    paddingRight: pxScale.wp(10),
    alignItems: 'flex-start',
  },

  textContentStepOne: {marginLeft: pxScale.wp(10), width: pxScale.wp(270)},

  buttonStepOne: {
    height: pxScale.hp(40),
    backgroundColor: Colors.Blue_ice,
    borderRadius: 30,
    width: pxScale.wp(250),
  },

  viewFlatListStepTwo: {
    marginTop: pxScale.hp(35),
    paddingLeft: pxScale.wp(10),
    paddingRight: pxScale.wp(10),
    alignItems: 'center',
  },

  buttonCompleteStepTwo: {
    height: pxScale.hp(40),
    backgroundColor: Colors.Blue_ice,
    borderRadius: 30,
    minWidth: pxScale.wp(250),
    width: pxScale.wp(250),
  },

  textMarginLeft: {marginLeft: pxScale.wp(6)},

  buttonGrayStepTwo: {
    height: pxScale.hp(40),
    backgroundColor: Colors.Gradient_start,
    borderRadius: pxScale.hp(30),
    minWidth: pxScale.wp(250),
    marginTop: pxScale.hp(20),
  },

  viewMarginTop: {marginTop: pxScale.hp(70)},
});
