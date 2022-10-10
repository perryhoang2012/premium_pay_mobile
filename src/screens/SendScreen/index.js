import React from 'react';
import Block from '~components/Block';
import HeaderGradient from '~components/HeaderGradient';
import styles from './styles';
import CustomText from '~components/CustomText';
import Colors from '~assets/colors';
import {coverAddress, pxScale} from '~utils/funcHelper';
import AppSvg from '~components/AppSvg';
import CustomButton from '~components/CustomButton';
import {AppIcon} from '~assets/svg';
import ButtonGradient from '~components/ButtonGradient';
import {useNavigation} from '@react-navigation/native';
import constants from '~constants';
import CustomInput from '~components/CustomInput';
import {LayoutAnimation, Platform, ScrollView, UIManager} from 'react-native';
import images from '~assets/images';
import AppFastImage from '~components/AppFastImage';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const SendScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = React.useState(0);
  const [showComment, setShowComment] = React.useState(false);
  const activeAccount = useSelector(rootState => rootState?.activeAccount);

  const [valueComment, setValueComment] = React.useState('');

  const [valueAmount, setValueAmount] = React.useState(0);

  const goBack = () => {
    navigation.goBack();
  };
  const transactionInfo = () => {
    return (
      <Block style={styles.viewItem}>
        <CustomText
          color={Colors.White}
          size={14}
          weight={'600'}
          bold
          letterSpacing={1}
          style={{marginBottom: pxScale.hp(10)}}>
          {constants.TRANSACTION_INFO}
        </CustomText>
        <Block row style={styles.viewUnderlined} space={'between'}>
          <CustomText regular size={14} color={Colors.White} weight={'400'}>
            {coverAddress(activeAccount.address, 9)}
          </CustomText>
          <CustomButton row center middle>
            <CustomText
              semiBold
              size={12}
              color={Colors.Pink}
              weight={'500'}
              customFont="Bold"
              style={{marginRight: pxScale.wp(10)}}>
              {constants.ADDRESS_DETAILS}
            </CustomText>
            <AppSvg source={AppIcon.iconQrCodeWhite} width={16} height={16} />
          </CustomButton>
        </Block>
        {/* <CustomText
          color={Colors.White}
          weight={'400'}
          style={{marginTop: pxScale.wp(10)}}>
          Regular online-only address.
        </CustomText> */}
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
    <LinearGradient
      colors={[
        Colors.Gradient_start_2,
        Colors.Gradient_end,
        Colors.Gradient_end,
      ]}
      style={styles.container}>
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
          {/* <Block>
            <CustomText
              color={Colors.White}
              size={16}
              weight={'500'}
              letterSpacing={1}
              style={{textAlign: 'center'}}>
              {constants.TRANSACTION_TYPE}
            </CustomText>
          </Block> */}
          {/* {renderTab()} */}
          <Block style={styles.viewItem}>
            <CustomText
              color={Colors.White}
              size={14}
              bold
              weight={'700'}
              letterSpacing={1}
              style={{lineHeight: 20}}>
              {constants.AMOUNT}
            </CustomText>
            <Block middle row space={'between'}>
              <Block style={styles.viewChildAmount}>
                <CustomInput
                  number
                  keyboardType={'number-pad'}
                  onChangeText={e => setValueAmount(e)}
                  value={valueAmount}
                  style={{
                    color: Colors.Pink,
                    fontSize: pxScale.fontSize(24),
                    fontWeight: '500',
                    lineHeight: 30,
                    letterSpacing: 1,
                  }}
                />
              </Block>
              <Block row middle>
                <AppFastImage
                  source={images.imageIconEllipse}
                  style={{width: 20, height: 20, marginRight: 5}}
                />
                <CustomText
                  color={Colors.White}
                  size={12}
                  weight={'600'}
                  semiBold
                  style={{marginRight: pxScale.wp(5)}}>
                  FAC
                </CustomText>
                <AppSvg source={AppIcon.iconDropDown} width={12} height={12} />
              </Block>
            </Block>
            <CustomText
              color={Colors.Gray}
              size={16}
              weight={'400'}
              regular
              letterSpacing={1}
              style={{marginTop: pxScale.wp(8)}}>
              0.01 USD
            </CustomText>
            <CustomText
              color={Colors.White}
              size={14}
              bold
              weight={'700'}
              letterSpacing={1}
              style={{lineHeight: 20, marginTop: pxScale.hp(16)}}>
              {constants.AVAILABLE}
            </CustomText>
            <Block middle row space={'between'}>
              <Block
                style={{
                  marginTop: pxScale.hp(5),
                  paddingBottom: pxScale.hp(5),
                }}>
                <CustomText
                  color={Colors.Pink}
                  size={24}
                  weight={'500'}
                  medium
                  style={{lineHeight: 30}}
                  letterSpacing={1}>
                  1 FAC
                </CustomText>
              </Block>
              <Block row>
                <AppSvg source={AppIcon.iconUpPink} width={14} height={14} />
                <CustomText
                  color={Colors.Pink}
                  weight={'600'}
                  semiBold
                  size={12}
                  style={{marginLeft: pxScale.wp(10)}}>
                  {constants.ADDRESS_DETAILS}
                </CustomText>
              </Block>
            </Block>
            <CustomText
              color={Colors.Gray}
              size={16}
              weight={'400'}
              regular
              letterSpacing={1}
              style={{marginTop: pxScale.wp(5)}}>
              0.58 USD
            </CustomText>
          </Block>
          <Block style={styles.viewItem}>
            <Block row middle center space={'between'}>
              <CustomText
                color={Colors.White}
                size={14}
                weight={'700'}
                bold
                letterSpacing={1}>
                {constants.COMMENT}
              </CustomText>
              <CustomButton
                hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
                onPress={() => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut,
                  );
                  setShowComment(!showComment);
                }}>
                {showComment ? (
                  <AppSvg source={AppIcon.iconDropUp} width={14} height={14} />
                ) : (
                  <AppSvg
                    source={AppIcon.iconDropDown}
                    width={14}
                    height={14}
                  />
                )}
              </CustomButton>
            </Block>
            {!!showComment && (
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
            regular
            weight={'400'}
            style={[styles.textCenterAndLineHeight, {lineHeight: 22}]}>
            {activeTab === 0
              ? 'For the transaction to complete, the recipient must get online within the next 12 hours and you should get online within 2 hours afterwards'
              : ' Min transaction fee to send offline transaction is 0.01 FAC'}
          </CustomText>
          <Block center middle style={{marginTop: pxScale.hp(20)}}>
            <CustomButton
              row
              onGradient
              style={styles.buttonNext}
              middle
              center>
              <AppSvg source={AppIcon.iconRightBlue} width={14} height={14} />
              <CustomText
                style={{marginLeft: pxScale.wp(5)}}
                color={Colors.White}
                bold
                weight={'700'}
                size={16}>
                {constants.NEXT}
              </CustomText>
            </CustomButton>
          </Block>
        </ScrollView>
      </Block>
    </LinearGradient>
  );
};

export default SendScreen;
