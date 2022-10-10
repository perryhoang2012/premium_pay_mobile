import {StyleSheet} from 'react-native';
import {pxScale} from '~utils/funcHelper';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  logo: {
    width: pxScale.wp(160),
    height: pxScale.hp(160),
  },
  viewTextFooter: {
    position: 'absolute',
    bottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
