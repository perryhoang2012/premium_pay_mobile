import {StyleSheet} from 'react-native';
import Colors from '~assets/colors';
import {pxScale} from '~utils/funcHelper';
import Insets from '~utils/insets';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: pxScale.wp(4),
    paddingRight: pxScale.wp(4),
    backgroundColor: Colors.Gradient_end,
  },
  container: {
    flex: 1,
  },
  textTitleHeader: {
    fontSize: pxScale.fontSize(20),
  },
  body: {
    flex: 1,
    paddingHorizontal: pxScale.wp(20),
    // marginTop: Insets.TOP,
  },
});
