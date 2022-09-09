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
    letterSpacing: 4,
    fontSize: pxScale.fontSize(20),
    color: Colors.White,
  },
});
