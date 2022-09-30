import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import Header from '~components/Header';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import constants from '~constants';
import {pxScale} from '~utils/funcHelper';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '~components/CustomInput';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';
import ButtonGradient from '~components/ButtonGradient';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import CustomButton from '~components/CustomButton';

const ChangePasswordScreen = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  const _renderInput = () => {
    const input = [
      {
        title: 'NETWORK NAME',
        value: 'network_name',
        placeholder: 'Network Name (optional)',
      },
      {title: 'RPC URL', value: 'rpc_url', placeholder: 'New RPC Network'},
      {title: 'CHAIN ID', value: 'chain_id', placeholder: 'Chain ID'},
      {title: 'SYMBOL', value: 'symbol', placeholder: 'Symbol (optional)'},
      {
        title: 'BLOCK EXPLORER URL',
        value: 'block_exporter_url',
        placeholder: 'Block Exporter URL (optional)',
      },
    ];
    return input.map((item, index) => (
      <Block key={index} style={{marginBottom: pxScale.hp(30)}}>
        <CustomText
          color={Colors.White}
          weight={'500'}
          style={{marginBottom: pxScale.hp(8)}}>
          {item.title}
        </CustomText>
        <CustomInput
          placeholder={item.placeholder}
          style={{
            height: pxScale.hp(48),
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: pxScale.hp(10),
            color: Colors.Gray,
          }}
          onChangeText={() => console.log('hehe')}
        />
      </Block>
    ));
  };

  const _renderHeader = () => (
    <Block
      row
      style={{
        backgroundColor: Colors.Background_block,
        marginBottom: pxScale.hp(16),
        paddingHorizontal: pxScale.wp(20),
        paddingVertical: pxScale.wp(10),
        borderRadius: pxScale.hp(12),
        // borderColor: 'rgba(72, 204, 247, 0.2)',
        // borderWidth: 1,
        // backgroundColor: 'rgba(72, 204, 247, 0.1)',
      }}>
      <AppSvg source={AppIcon.iconInfoCirclePink} width={20} height={20} />
      <CustomText color={Colors.White} style={{marginLeft: pxScale.wp(8)}}>
        A malicious network provider can lie about the state of the blockchain
        and record your network activity. Only add custom networks you trust
      </CustomText>
    </Block>
  );

  return (
    <LinearGradient
      colors={[
        Colors.Gradient_start,
        Colors.Gradient_end,
        Colors.Gradient_end,
        Colors.Gradient_end,
      ]}
      style={styles.linearGradient}>
      <Header title={'Custom networks'} goBack={goBack} />
      <KeyboardAvoidingView behavior={'height'} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
            {_renderHeader()}
            <Block>{_renderInput()}</Block>
            <Block middle center>
              <CustomButton
                middle
                center
                style={{
                  height: pxScale.hp(43),
                  backgroundColor: Colors.Background_button,
                  borderRadius: 10,
                  width: pxScale.wp(320),
                  marginBottom: 100,
                }}>
                <CustomText color={Colors.White} size={16} weight={'600'}>
                  {constants.ADD}
                </CustomText>
              </CustomButton>
            </Block>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default ChangePasswordScreen;
