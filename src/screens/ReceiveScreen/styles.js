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
    fontSize: pxScale.fontSize(20),
  },
  body: {
    flex: 1,
    backgroundColor: Colors.Gradient_end,
    padding: pxScale.wp(20),
  },

  viewTab: {
    height: pxScale.hp(48),
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: pxScale.hp(50),
    marginTop: pxScale.hp(16),
    padding: pxScale.hp(4),
  },
  buttonTab: {width: '48%', borderRadius: pxScale.hp(50)},

  viewItem: {
    backgroundColor: Colors.Background_item,
    padding: pxScale.wp(20),
    borderRadius: pxScale.hp(12),
    marginBottom: pxScale.hp(16),
    marginTop: pxScale.hp(10),
    borderColor: Colors.Border_Gray,
    borderWidth: 1,
  },

  textCenterAndLineHeight: {textAlign: 'center', lineHeight: pxScale.wp(22)},
});
