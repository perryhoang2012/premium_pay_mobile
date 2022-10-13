import {StyleSheet} from 'react-native';
import Colors from '~assets/colors';
import {pxScale} from '~utils/funcHelper';

export default StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: pxScale.wp(24),
    marginTop: pxScale.hp(30),
  },
});
