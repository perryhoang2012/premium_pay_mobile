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
import {useNavigation} from '@react-navigation/native';
import constants from '~constants';
import CustomInput from '~components/CustomInput';
import {LayoutAnimation, Platform, ScrollView, UIManager} from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const SendScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = React.useState(0);
  const [showComment, setShowComment] = React.useState(false);

  const [valueComment, setValueComment] = React.useState('');

  const goBack = () => {
    navigation.goBack();
  };
  const transactionInfo = () => {
    return (
      <Block style={styles.viewItem}>
        <CustomText
          color={Colors.White}
          size={16}
          weight={'500'}
          letterSpacing={1}>
          {constants.TRANSACTION_INFO}{' '}
        </CustomText>
        <Block row style={styles.viewUnderlined} space={'between'}>
          <CustomText color={Colors.White} weight={'400'}>
            3XHPHa...mvtJkoU
          </CustomText>
          <CustomButton row>
            <CustomText
              color={Colors.Blue_ice}
              weight={'500'}
              customFont="Bold"
              style={{marginRight: pxScale.wp(10)}}>
              {constants.ADDRESS_DETAILS}
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
          center
          onGradient={activeTab === 1 ? true : false}
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

  return (
    <Block style={styles.container}>
      <HeaderGradient
        title={'SEND'}
        styleTitle={styles.textTitleHeader}
        goBack={goBack}
      />
      <Block flex>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          style={styles.body}
          showsVerticalScrollIndicator={false}>
          {transactionInfo()}
          <Block>
            <CustomText
              color={Colors.White}
              size={16}
              weight={'500'}
              letterSpacing={1}
              style={{textAlign: 'center'}}>
              {constants.TRANSACTION_TYPE}
            </CustomText>
          </Block>
          {renderTab()}
          <Block style={styles.viewItem}>
            <CustomText
              color={Colors.White}
              size={16}
              weight={'500'}
              letterSpacing={1}>
              {constants.AMOUNT}
            </CustomText>
            <Block middle row space={'between'}>
              <Block style={styles.viewChildAmount}>
                <CustomText
                  color={Colors.Blue_ice}
                  size={24}
                  weight={'400'}
                  letterSpacing={1}>
                  0.01
                </CustomText>
              </Block>
              <Block row>
                <CustomText
                  color={Colors.White}
                  size={14}
                  weight={'400'}
                  style={{marginRight: pxScale.wp(5)}}>
                  Fac
                </CustomText>
                <AppSvg source={AppIcon.iconDropDown} width={12} height={12} />
              </Block>
            </Block>
            <CustomText
              color={Colors.Gray}
              size={16}
              weight={'400'}
              letterSpacing={1}
              style={{marginTop: pxScale.wp(5)}}>
              0.01 USD
            </CustomText>
            <CustomText
              color={Colors.White}
              size={16}
              weight={'500'}
              letterSpacing={1}
              style={{marginTop: pxScale.hp(16)}}>
              {constants.AVAILABLE}
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
                  letterSpacing={1}>
                  1 Fac
                </CustomText>
              </Block>
              <Block row>
                <AppSvg source={AppIcon.iconUpBlue} width={14} height={14} />

                <CustomText
                  color={Colors.Blue_ice}
                  weight={'500'}
                  customFont="Bold"
                  style={{marginLeft: pxScale.wp(10)}}>
                  {constants.ADDRESS_DETAILS}
                </CustomText>
              </Block>
            </Block>
            <CustomText
              color={Colors.White}
              size={16}
              weight={'400'}
              letterSpacing={1}
              style={{marginTop: pxScale.wp(5)}}>
              0.58 USD
            </CustomText>
          </Block>
          <Block style={styles.viewItem}>
            <Block row middle center space={'between'}>
              <CustomText
                color={Colors.White}
                size={16}
                weight={'500'}
                letterSpacing={1}>
                {constants.COMMENT}
              </CustomText>
              <CustomButton
                onPress={() => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut,
                  );
                  setShowComment(pre => !pre);
                }}>
                <AppSvg
                  source={
                    showComment ? AppIcon.iconDropUp : AppIcon.iconDropDown
                  }
                  width={14}
                  height={14}
                />
              </CustomButton>
            </Block>
            {showComment && (
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

          <CustomText
            color={Colors.White}
            size={14}
            weight={'500'}
            style={styles.textCenterAndLineHeight}>
            {activeTab === 0
              ? 'For the transaction to complete, the recipient must get online within the next 12 hours and you should get online within 2 hours afterwards'
              : ' Min transaction fee to send offline transaction is 0.01 Fac'}
          </CustomText>
          <Block center middle style={{marginBottom: pxScale.hp(50)}}>
            <ButtonGradient onGradient style={styles.buttonNext} middle center>
              <AppSvg source={AppIcon.iconRightBlue} width={14} height={14} />
              <CustomText
                style={{marginLeft: pxScale.wp(5)}}
                color={Colors.White}
                customFont="Bold"
                weight={'500'}
                size={16}>
                {constants.NEXT}
              </CustomText>
            </ButtonGradient>
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

export default SendScreen;
