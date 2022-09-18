import {StyleSheet} from 'react-native';
import Colors from '~utils/colors';
import {pxScale} from '~utils/func';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: pxScale.wp(150),
    height: pxScale.hp(150),
  },
});
