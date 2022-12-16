import {StyleSheet} from 'react-native';
import Colors from '~assets/colors';
import {pxScale} from '~utils/funcHelper';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },

  image: {
    paddingLeft: pxScale.wp(10),
    paddingRight: pxScale.wp(10),
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
