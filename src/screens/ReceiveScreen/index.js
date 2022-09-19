import React from 'react';
import Block from '~components/Block';
import styles from './styles';
import Colors from '~assets/colors';
import {HeaderGradient} from '~components';
import CustomText from '~components/CustomText';
import {pxScale} from '~utils/funcHelper';
import CustomButton from '~components/CustomButton';
import ButtonGradient from '~components/ButtonGradient';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';
import ModalScanQr from './components/ModalScanQr';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import constants from '~constants';
import CustomInput from '~components/CustomInput';

import {LayoutAnimation, Platform, UIManager} from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const ReceiveScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);
  const [showComment, setShowComment] = React.useState(false);
  const [valueComment, setValueComment] = React.useState('');

  const copyToClipboard = () => {
    Clipboard.setString('hello world');
  };

  const toggleModal = () => {
    setModalVisible(pre => !pre);
  };

  const goBack = () => {
    navigation.goBack();
  };
  const renderTab = () => {
    return (
      <Block row center style={styles.viewTab}>
        <ButtonGradient
          onGradient={activeTab === 0 ? true : false}
          center
          style={styles.buttonTab}
          onPress={() => setActiveTab(0)}>
          <CustomText
            color={activeTab === 0 ? Colors.White : Colors.Gray}
            weight={'500'}
            customFont="Bold"
            size={16}>
            {constants.REGULAR}
          </CustomText>
        </ButtonGradient>
        <ButtonGradient
          onGradient={activeTab === 1 ? true : false}
          center
          style={styles.buttonTab}
          onPress={() => setActiveTab(1)}>
          <CustomText
            color={activeTab === 1 ? Colors.White : Colors.Gray}
            weight={'500'}
            customFont="Bold"
            size={16}>
            {constants.OFFLINE}
          </CustomText>
        </ButtonGradient>
      </Block>
    );
  };

  const data = [
    {title: 'ADDRESS', value: '3XHPHa...mvtJkoU', type: 'address'},
    {title: 'REQUESTED AMOUNT (optional)'},
    {title: 'COMMENT'},
  ];

  const renderContent = () => {
    return (
      <Block style={{marginTop: pxScale.hp(16)}}>
        {data.map((item, index) => (
          <Block key={index} style={styles.viewItem}>
            {item.type === 'address' ? (
              <Block space={'between'}>
                <CustomText
                  letterSpacing={1}
                  color={Colors.White}
                  weight={'500'}
                  customFont="Bold">
                  {item.title}
                </CustomText>
                <Block row style={{marginTop: pxScale.hp(5)}} space={'between'}>
                  <CustomText color={Colors.White} weight={'500'}>
                    {item.value}
                  </CustomText>
                  <Block row space={'around'} style={{width: pxScale.wp(50)}}>
                    <CustomButton onPress={() => copyToClipboard()}>
                      <AppSvg
                        source={AppIcon.iconCopy}
                        width={16}
                        height={16}
                      />
                    </CustomButton>
                    <AppSvg
                      source={AppIcon.iconQrCode}
                      width={16}
                      height={16}
                    />
                  </Block>
                  <CustomButton>
                    <CustomText
                      color={Colors.Blue_ice}
                      weight={'500'}
                      customFont="Bold">
                      address details
                    </CustomText>
                  </CustomButton>
                </Block>
              </Block>
            ) : (
              <Block>
                <Block row space="between">
                  <CustomText
                    color={Colors.White}
                    letterSpacing={1}
                    weight={'500'}
                    customFont="Bold">
                    {item.title}
                  </CustomText>
                  <CustomButton
                    hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
                    onPress={() => {
                      if (item.title === 'COMMENT') {
                        LayoutAnimation.configureNext(
                          LayoutAnimation.Presets.easeInEaseOut,
                        );
                        setShowComment(pre => !pre);
                      }
                    }}>
                    <AppSvg
                      source={
                        !!showComment && item.title === 'COMMENT'
                          ? AppIcon.iconDropUp
                          : AppIcon.iconDropDown
                      }
                      width={14}
                      height={14}
                    />
                  </CustomButton>
                </Block>
                {!!showComment && item.title === 'COMMENT' && (
                  <Block>
                    <CustomInput
                      style={styles.inputComment}
                      value={valueComment}
                      onChangeText={e => {
                        setValueComment(e);
                      }}
                    />
                  </Block>
                )}
              </Block>
            )}
          </Block>
        ))}
      </Block>
    );
  };

  return (
    <Block style={styles.container}>
      <HeaderGradient
        title={'RECEIVE'}
        styleTitle={styles.textTitleHeader}
        goBack={goBack}
      />
      <Block style={styles.body}>
        <CustomText
          color={Colors.White}
          size={16}
          weight={'500'}
          letterSpacing={1}>
          TRANSACTION TYPE
        </CustomText>
        {renderTab()}
        {renderContent()}

        <Block center middle>
          <CustomText
            style={styles.textCenterAndLineHeight}
            color={Colors.White}
            size={16}>
            Sender will be given a choice between regular and offline payment.
          </CustomText>
          <CustomText
            style={[
              styles.textCenterAndLineHeight,
              {
                marginTop: pxScale.hp(10),
              },
            ]}
            color={Colors.White}
            size={16}>
            For the transaction to complete, you should get online during the 12
            hours after FAC are sent
          </CustomText>

          <ButtonGradient
            onGradient
            style={{
              height: pxScale.hp(40),
              width: pxScale.wp(170),
              marginTop: pxScale.hp(10),
              borderRadius: pxScale.hp(40),
            }}
            middle
            center
            onPress={toggleModal}>
            <CustomText
              color={Colors.White}
              customFont="Bold"
              weight={'500'}
              size={16}>
              {constants.SHARE_ADDRESS}
            </CustomText>
          </ButtonGradient>
        </Block>

        <ModalScanQr modalVisible={modalVisible} toggleModal={toggleModal} />
      </Block>
    </Block>
  );
};

export default ReceiveScreen;
