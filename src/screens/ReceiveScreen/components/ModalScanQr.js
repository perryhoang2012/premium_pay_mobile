import {Modal, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '~assets/colors';
import Block from '~components/Block';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';
import AppFastImage from '~components/AppFastImage';
import images from '~assets/images';
import {pxScale} from '~utils/funcHelper';
import CustomText from '~components/CustomText';
import ButtonGradient from '~components/ButtonGradient';
import CustomButton from '~components/CustomButton';
import constants from '~constants';

const ModalScanQr = prop => {
  const {modalVisible, toggleModal} = prop;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        toggleModal();
      }}>
      <Block style={styles.centeredView}>
        <Block style={styles.modalView}>
          <Block style={styles.viewButtonClose}>
            <CustomButton onPress={toggleModal}>
              <AppSvg source={AppIcon.iconCancel} width={14} height={14} />
            </CustomButton>
          </Block>

          <AppFastImage source={images.imageQr} style={styles.imageQr} />
          <CustomText color={Colors.White} style={styles.textSubTitle}>
            {constants.SUBTITLE_QR_CODE_MODAL}
          </CustomText>

          <ButtonGradient center middle onGradient style={styles.buttonShare}>
            <CustomText
              color={Colors.White}
              size={18}
              customFont={'Bold'}
              weight={'500'}>
              {constants.SHARE_QR}
            </CustomText>
          </ButtonGradient>
        </Block>
      </Block>
    </Modal>
  );
};

export default ModalScanQr;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6);',
  },
  modalView: {
    backgroundColor: Colors.Blue_2,
    margin: pxScale.wp(20),
    borderRadius: pxScale.wp(20),
    padding: pxScale.wp(35),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  imageQr: {
    width: pxScale.wp(160),
    height: pxScale.hp(160),
  },
  viewButtonClose: {width: '100%', alignItems: 'flex-end'},

  textSubTitle: {
    marginTop: pxScale.hp(10),
    lineHeight: pxScale.hp(20),
    textAlign: 'center',
  },
  buttonShare: {
    height: pxScale.hp(40),
    width: pxScale.wp(160),
    borderRadius: pxScale.wp(50),
    marginTop: pxScale.wp(10),
  },
});
