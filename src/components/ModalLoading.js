import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Block from './Block';
import CustomText from './CustomText';
import Colors from '~assets/colors';
import {useSelector, useDispatch} from 'react-redux';
import {setLoading} from '~redux/actions/user';
import LottieView from 'lottie-react-native';
import json from '~assets/json';
import {pxScale} from '~utils/funcHelper';
import CustomButton from './CustomButton';
import AppSvg from './AppSvg';
import {AppIcon} from '~assets/svg';

const ModalLoading = () => {
  const loading = useSelector(rootState => rootState?.loading);

  const dispatch = useDispatch();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={loading}
      onRequestClose={() => {
        dispatch(setLoading(false));
      }}>
      <Block style={styles.centeredView}>
        <Block style={styles.modalView} center middle>
          <Block
            style={{
              position: 'absolute',
              top: 14,
              right: 20,
            }}>
            <CustomButton onPress={() => dispatch(setLoading(false))}>
              <AppSvg source={AppIcon.iconCancel} width={14} height={14} />
            </CustomButton>
          </Block>
          <Block
            style={{
              width: 150,
              height: 150,
              position: 'absolute',
              alignItems: 'center',
              // top: 400,
            }}>
            <CustomText
              bold
              size={20}
              weight={'700'}
              color={Colors.White}
              style={{position: 'absolute'}}>
              Loading
            </CustomText>
            <LottieView
              source={json.loading}
              autoPlay
              loop
              resizeMode="cover"
            />
          </Block>
        </Block>
      </Block>
    </Modal>
  );
};

export default ModalLoading;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 22,
    backgroundColor: 'rgba(15, 14, 14, 0.5)',
  },
  modalView: {
    width: '90%',
    height: 405,
    backgroundColor: Colors.Background_block,
    borderRadius: 24,
    paddingHorizontal: 15,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
