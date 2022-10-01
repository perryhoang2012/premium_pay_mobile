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
    fontWeight: '700',
    marginLeft: pxScale.wp(4),
    letterSpacing: 2,
    fontSize: pxScale.fontSize(20),
    color: Colors.White,
  },
  viewItemSendPhase: {
    width: pxScale.wp(150),
    height: pxScale.hp(50),
    marginBottom: pxScale.hp(10),
    marginLeft: pxScale.hp(10),
    marginRight: pxScale.hp(10),
    backgroundColor: Colors.Background_button,
    borderRadius: pxScale.hp(12),
    marginTop: pxScale.hp(10),
    borderColor: Colors.Border_Gray,
    borderWidth: 1,
    padding: pxScale.wp(10),
  },

  viewNumber: {
    backgroundColor: Colors.Pink,
    width: pxScale.wp(20),
    height: pxScale.hp(20),
    borderRadius: pxScale.wp(10),
  },

  viewMarginLeft: {marginLeft: pxScale.wp(10)},

  inputConfirm: {width: pxScale.wp(90), color: Colors.White},

  textCenter: {
    textAlign: 'center',
    marginHorizontal: pxScale.wp(10),
    lineHeight: 20,
  },

  viewStepOne: {marginTop: pxScale.hp(20), padding: pxScale.wp(10)},

  viewContentStepOne: {
    marginTop: pxScale.hp(35),
    paddingLeft: pxScale.wp(10),
    paddingRight: pxScale.wp(10),
    alignItems: 'flex-start',
  },

  textContentStepOne: {marginLeft: pxScale.wp(10), width: pxScale.wp(270)},

  buttonStepOne: {
    height: pxScale.hp(43),
    backgroundColor: Colors.Background_button,
    borderRadius: 10,
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
    backgroundColor: Colors.White,
    borderRadius: 10,
    width: pxScale.wp(300),
  },

  textMarginLeft: {marginLeft: pxScale.wp(6)},

  buttonGrayStepTwo: {
    height: pxScale.hp(40),
    backgroundColor: Colors.Background_button,
    borderRadius: pxScale.hp(10),
    width: pxScale.wp(300),
    marginTop: pxScale.hp(20),
  },

  viewMarginTop: {marginTop: pxScale.hp(70)},
});
