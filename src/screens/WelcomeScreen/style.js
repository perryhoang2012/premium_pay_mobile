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
  logo: {
    width: pxScale.wp(150),
    height: pxScale.hp(150),
  },
  viewTextFooter: {
    flex: 1,
    // position: 'absolute',
    // bottom: pxScale.hp(150),
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
  },
  button: {
    height: pxScale.hp(43),
    backgroundColor: Colors.Background_button,
    borderRadius: 10,
    width: pxScale.wp(290),
    marginBottom: pxScale.hp(20),
  },
});
