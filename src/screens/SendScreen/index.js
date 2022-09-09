import {View, Text} from 'react-native';
import React from 'react';
import Block from '~components/Block';
import HeaderGradient from '~components/HeaderGradient';
import styles from './styles';
import CustomText from '~components/CustomText';
import Colors from '~assets/colors';
import {pxScale} from '~utils/funcHelper';
import AppSvg from '~components/AppSvg';
import CustomButton from '~components/CustomButton';
import {AppIcon} from '~assets/svg';
import ButtonGradient from '~components/ButtonGradient';

const SendScreen = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const transactionInfo = () => {
    return (
      <Block
        style={{
          backgroundColor: Colors.Background_item,
          padding: 20,
          borderRadius: pxScale.hp(12),
          marginBottom: pxScale.hp(16),
          marginTop: pxScale.hp(10),
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1,
        }}>
        <CustomText
          color={Colors.White}
          size={16}
          weight={'500'}
          style={{letterSpacing: 1}}>
          TRANSACTION INFO
        </CustomText>
        <Block
          row
          style={{
            marginTop: pxScale.hp(5),
            borderBottomColor: 'rgba(255,255,255,0.5)',
            borderBottomWidth: pxScale.hp(0.5),
            paddingBottom: pxScale.hp(5),
          }}
          space={'between'}>
          <CustomText color={Colors.White} weight={'400'}>
            3XHPHa...mvtJkoU
          </CustomText>
          <CustomButton row>
            <CustomText
              color={Colors.Blue_ice}
              weight={'500'}
              customFont="Bold"
              style={{marginRight: pxScale.wp(10)}}>
              address details
            </CustomText>
            <AppSvg source={AppIcon.iconQrCode} width={16} height={16} />
          </CustomButton>
        </Block>
        <CustomText
          color={Colors.White}
          weight={'400'}
          style={{marginTop: pxScale.wp(10)}}>
          Regular online-only address.
        </CustomText>
      </Block>
    );
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
          center
          onGradient={activeTab === 1 ? true : false}
          style={{width: '48%', borderRadius: pxScale.hp(50)}}
          onPress={() => setActiveTab(1)}>
          <CustomText
            color={activeTab === 1 ? Colors.White : Colors.Gray}
            weight={'500'}
            customFont="Bold"
            size={16}>
            Offline
          </CustomText>
        </ButtonGradient>
      </Block>
    );
  };

  return (
    <Block style={styles.container}>
      <HeaderGradient title={'SEND'} styleTitle={styles.textTitleHeader} />
      <Block style={styles.body}>
        {transactionInfo()}
        <Block>
          <CustomText
            color={Colors.White}
            size={16}
            weight={'500'}
            style={{letterSpacing: 1, textAlign: 'center'}}>
            TRANSACTION TYPE
          </CustomText>
        </Block>
        {renderTab()}
        <Block
          style={{
            backgroundColor: Colors.Background_item,
            padding: 20,
            borderRadius: pxScale.hp(12),
            marginBottom: pxScale.hp(16),
            marginTop: pxScale.hp(10),
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
          }}>
          <CustomText
            color={Colors.White}
            size={16}
            weight={'500'}
            style={{letterSpacing: 1}}>
            AMOUNT
          </CustomText>
          <Block middle row space={'between'}>
            <Block
              style={{
                width: '80%',
                marginTop: pxScale.hp(5),
                borderBottomColor: 'rgba(255,255,255,0.5)',
                borderBottomWidth: pxScale.hp(0.5),
                paddingBottom: pxScale.hp(5),
              }}>
              <CustomText
                color={Colors.Blue_ice}
                size={24}
                weight={'400'}
                style={{letterSpacing: 1}}>
                0.01
              </CustomText>
            </Block>
            <Block row>
              <CustomText
                color={Colors.White}
                size={14}
                weight={'400'}
                style={{marginRight: pxScale.wp(5)}}>
                PPAY
              </CustomText>
              <AppSvg source={AppIcon.iconDropDown} width={12} height={12} />
            </Block>
          </Block>
          <CustomText
            color={Colors.Gray}
            size={16}
            weight={'400'}
            style={{letterSpacing: 1, marginTop: pxScale.wp(5)}}>
            0.01 USD
          </CustomText>
          <CustomText
            color={Colors.White}
            size={16}
            weight={'500'}
            style={{letterSpacing: 1, marginTop: pxScale.hp(16)}}>
            AVAILABLE
          </CustomText>
          <Block middle row space={'between'}>
            <Block
              style={{
                marginTop: pxScale.hp(5),
                paddingBottom: pxScale.hp(5),
              }}>
              <CustomText
                color={Colors.Blue_ice}
                size={24}
                weight={'400'}
                style={{letterSpacing: 1}}>
                1 PPAY
              </CustomText>
            </Block>
            <Block row>
              <AppSvg source={AppIcon.iconUpBlue} width={14} height={14} />

              <CustomText
                color={Colors.Blue_ice}
                weight={'500'}
                customFont="Bold"
                style={{marginLeft: pxScale.wp(10)}}>
                address details
              </CustomText>
            </Block>
          </Block>
          <CustomText
            color={Colors.White}
            size={16}
            weight={'400'}
            style={{letterSpacing: 1, marginTop: pxScale.wp(5)}}>
            0.58 USD
          </CustomText>
        </Block>
        <Block
          row
          middle
          center
          space={'between'}
          style={{
            backgroundColor: Colors.Background_item,
            padding: 20,
            borderRadius: pxScale.hp(12),
            marginBottom: pxScale.hp(16),
            marginTop: pxScale.hp(10),
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
          }}>
          <CustomText
            color={Colors.White}
            size={16}
            weight={'500'}
            style={{letterSpacing: 1}}>
            COMMENT
          </CustomText>
          <AppSvg source={AppIcon.iconDropDown} width={14} height={14} />
        </Block>

        <CustomText
          color={Colors.White}
          size={14}
          weight={'500'}
          style={{textAlign: 'center', lineHeight: 22}}>
          {activeTab === 0
            ? 'For the transaction to complete, the recipient must get online within the next 12 hours and you should get online within 2 hours afterwards'
            : ' Min transaction fee to send offline transaction is 0.01 PPAY'}
        </CustomText>
        <Block center middle>
          <ButtonGradient
            onGradient
            style={{
              height: pxScale.hp(40),
              width: pxScale.wp(170),
              marginTop: pxScale.hp(10),
              borderRadius: pxScale.hp(40),
            }}
            middle
            center>
            <AppSvg source={AppIcon.iconRightBlue} width={14} height={14} />
            <CustomText
              style={{textAlign: 'center', marginLeft: pxScale.wp(5)}}
              color={Colors.White}
              customFont="Bold"
              weight={'500'}
              size={16}>
              Next
            </CustomText>
          </ButtonGradient>
        </Block>
      </Block>
    </Block>
  );
};

export default SendScreen;
