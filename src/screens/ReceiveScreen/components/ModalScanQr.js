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
import {BlurView, VibrancyView} from '@react-native-community/blur';

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
        <BlurView
          style={styles.blurViewStyle}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor={'white'}>
          <Block style={styles.modalView}>
            <Block style={styles.viewButtonClose}>
              <CustomButton onPress={toggleModal}>
                <AppSvg source={AppIcon.iconCancel} width={14} height={14} />
              </CustomButton>
            </Block>

            <AppFastImage source={images.imageQr} style={styles.imageQr} />
            <CustomText
              regular
              color={Colors.White}
              style={styles.textSubTitle}
              size={15}>
              {constants.SUBTITLE_QR_CODE_MODAL}
            </CustomText>

            <CustomButton row center middle style={styles.buttonShare}>
              <AppSvg source={AppIcon.iconShare} width="14" height="14" />
              <CustomText
                color={Colors.White}
                size={16}
                bold
                weight={'700'}
                style={{marginLeft: pxScale.wp(5)}}>
                {constants.SHARE_QR}
              </CustomText>
            </CustomButton>
          </Block>
        </BlurView>
      </Block>
    </Modal>
  );
};

export default ModalScanQr;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(15, 14, 14, 0.5)',
  },
  modalView: {
    backgroundColor: Colors.Background_block,
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
    height: pxScale.hp(43),
    width: pxScale.wp(200),
    borderRadius: pxScale.wp(10),
    marginTop: pxScale.wp(16),
    backgroundColor: Colors.Background_button,
  },
  blurViewStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    flex: 1,
    justifyContent: 'center',
  },
});
