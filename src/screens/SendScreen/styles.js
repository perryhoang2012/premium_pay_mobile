import {StyleSheet} from 'react-native';
import Colors from '~assets/colors';
import {pxScale} from '~utils/funcHelper';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: pxScale.wp(12),
    paddingRight: pxScale.wp(12),
  },
  container: {
    flex: 1,
  },
  textTitleHeader: {
    fontSize: pxScale.fontSize(24),
    fontWeight: '700',
  },
  body: {
    flex: 1,
    padding: pxScale.wp(20),
  },

  viewItem: {
    backgroundColor: Colors.Background_block,
    padding: pxScale.wp(20),
    borderRadius: pxScale.hp(12),
    marginBottom: pxScale.hp(16),
    marginTop: pxScale.hp(10),
    borderColor: Colors.Border_Gray,
    borderWidth: 1,
  },
  viewUnderlined: {
    marginTop: pxScale.hp(5),
    // borderBottomColor: 'rgba(255,255,255,0.5)',
    // borderBottomWidth: pxScale.hp(0.5),
    // paddingBottom: pxScale.hp(5),
  },
  viewTab: {
    height: pxScale.hp(48),
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: pxScale.hp(50),
    marginTop: pxScale.hp(16),
    padding: pxScale.hp(4),
  },
  buttonTab: {width: '48%', borderRadius: pxScale.hp(50)},

  viewChildAmount: {
    width: '70%',
    marginTop: pxScale.hp(5),
    borderBottomColor: 'rgba(255,255,255,0.5)',
    borderBottomWidth: pxScale.hp(0.5),
    paddingBottom: pxScale.hp(5),
  },

  textCenterAndLineHeight: {
    textAlign: 'center',
    lineHeight: 22,
  },

  buttonNext: {
    height: pxScale.hp(43),
    width: pxScale.wp(170),
    marginTop: pxScale.hp(10),
    borderRadius: pxScale.hp(10),
    backgroundColor: Colors.Background_button,
  },
  inputComment: {
    marginTop: pxScale.hp(15),
    height: pxScale.hp(40),
    borderColor: Colors.Gray,
    borderWidth: 0.5,
    borderRadius: pxScale.wp(10),
    color: Colors.White,
  },
});
