import {View, Text} from 'react-native';
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

const ReceiveScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

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
      <Block
        row
        center
        style={{
          height: pxScale.hp(48),
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: pxScale.hp(50),
          marginTop: pxScale.hp(16),
          padding: pxScale.hp(4),
        }}>
        <ButtonGradient
          onGradient={activeTab === 0 ? true : false}
          center
          style={{width: '48%', borderRadius: pxScale.hp(50)}}
          onPress={() => setActiveTab(0)}>
          <CustomText
            color={activeTab === 0 ? Colors.White : Colors.Gray}
            weight={'500'}
            customFont="Bold"
            size={16}>
            Regular
          </CustomText>
        </ButtonGradient>
        <ButtonGradient
          onGradient={activeTab === 1 ? true : false}
          center
          style={{width: '48%', borderRadius: pxScale.hp(50)}}
          onPress={() => setActiveTab(1)}>
          <CustomText
            color={activeTab === 1 ? Colors.White : Colors.Gray}
            weight={'500'}
            customFont="Bold"
            size={16}>
            Max privacy
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
          <Block
            key={index}
            style={{
              backgroundColor: Colors.Background_item,
              padding: 20,
              borderRadius: pxScale.hp(12),
              marginBottom: pxScale.hp(16),
              marginTop: pxScale.hp(10),
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1,
            }}>
            {item.type === 'address' ? (
              <Block space={'between'}>
                <CustomText
                  style={{letterSpacing: 1}}
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
              <Block row space="between">
                <CustomText
                  style={{letterSpacing: 1}}
                  color={Colors.White}
                  weight={'500'}
                  customFont="Bold">
                  {item.title}
                </CustomText>
                <AppSvg source={AppIcon.iconDropDown} width={14} height={14} />
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
          style={{letterSpacing: 1}}>
          TRANSACTION TYPE
        </CustomText>
        {renderTab()}
        {renderContent()}

        <Block center middle>
          <CustomText
            style={{textAlign: 'center', lineHeight: 22}}
            color={Colors.White}
            size={16}>
            Sender will be given a choice between regular and offline payment.
          </CustomText>
          <CustomText
            style={{
              textAlign: 'center',
              lineHeight: 22,
              marginTop: pxScale.hp(10),
            }}
            color={Colors.White}
            size={16}>
            For the transaction to complete, you should get online during the 12
            hours after Beams are sent
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
              style={{textAlign: 'center'}}
              color={Colors.White}
              customFont="Bold"
              weight={'500'}
              size={16}>
              Share address
            </CustomText>
          </ButtonGradient>
        </Block>

        <ModalScanQr modalVisible={modalVisible} toggleModal={toggleModal} />
      </Block>
    </Block>
  );
};

export default ReceiveScreen;
