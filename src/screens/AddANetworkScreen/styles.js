import {StyleSheet} from 'react-native';
import Colors from '~assets/colors';
import {pxScale} from '~utils/funcHelper';

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
    fontSize: pxScale.fontSize(20),
  },
  body: {
    flex: 1,
    padding: pxScale.wp(20),
  },
  viewStatus: {
    marginBottom: pxScale.hp(10),
  },
  gradientDot: {
    width: pxScale.wp(12),
    height: pxScale.hp(12),
    borderRadius: pxScale.hp(50),
    backgroundColor: Colors.Green_status,
  },
  textStatus: {
    marginLeft: pxScale.wp(10),
  },

  viewContent: {
    backgroundColor: Colors.Background_item,
    padding: pxScale.wp(20),
    borderRadius: pxScale.wp(12),
    marginTop: pxScale.wp(20),
  },

  textTitle: {
    marginLeft: pxScale.wp(10),
    width: '70%',
  },

  textSubTitle: {
    marginLeft: pxScale.wp(10),
    marginTop: pxScale.wp(5),
    width: '70%',
  },

  switch: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
