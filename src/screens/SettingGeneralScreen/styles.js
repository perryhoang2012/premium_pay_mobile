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
    padding: pxScale.wp(20),
  },
  viewStatus: {
    marginBottom: pxScale.hp(10),
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

  switch: {transform: [{scaleX: 0.8}, {scaleY: 0.8}]},

  textTile: {
    width: '70%',
  },

  textSubTitle: {
    marginTop: pxScale.wp(8),
    width: '70%',
  },
});
