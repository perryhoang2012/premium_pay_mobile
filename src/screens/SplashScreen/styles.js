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
    width: pxScale.wp(150),
    height: pxScale.hp(150),
  },
  viewTextFooter: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
