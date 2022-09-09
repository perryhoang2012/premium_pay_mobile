import {Modal, StyleSheet, Text, View} from 'react-native';
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
          <Block
            style={{
              width: '100%',
              alignItems: 'flex-end',
            }}>
            <CustomButton onPress={toggleModal}>
              <AppSvg source={AppIcon.iconCancel} width={14} height={14} />
            </CustomButton>
          </Block>

          <AppFastImage
            source={images.imageQr}
            style={{width: pxScale.wp(160), height: pxScale.hp(160)}}
          />
          <CustomText
            color={Colors.White}
            style={{
              marginTop: pxScale.hp(10),
              lineHeight: pxScale.hp(20),
              textAlign: 'center',
            }}>
            For online payment to complete, you should get online during 12
            hours after coins are sent.
          </CustomText>

          <ButtonGradient
            center
            middle
            onGradient
            style={{
              height: pxScale.hp(40),
              width: pxScale.wp(160),
              borderRadius: 50,
              marginTop: pxScale.wp(10),
            }}>
            <CustomText
              color={Colors.White}
              size={18}
              customFont={'Bold'}
              weight={'500'}>
              Share QR
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
    margin: 20,
    borderRadius: 20,
    padding: 35,
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
});
