import {StyleSheet} from 'react-native';
import Colors from '~assets/colors';
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
    bottom: pxScale.hp(120),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    height: pxScale.hp(40),
    backgroundColor: Colors.Blue_ice,
    borderRadius: 30,
    width: pxScale.wp(290),
    marginBottom: pxScale.hp(20),
  },
});
