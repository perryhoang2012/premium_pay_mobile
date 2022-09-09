import {StyleSheet} from 'react-native';
import Colors from '~assets/colors';
import {pxScale} from '~utils/funcHelper';
import Insets from '~utils/insets';

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
    fontSize: 20,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.Gradient_end,
    padding: pxScale.wp(20),
  },
});
