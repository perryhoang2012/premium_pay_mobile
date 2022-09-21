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
        backgroundColor: Colors.Background_item,
        marginBottom: pxScale.hp(16),
        paddingHorizontal: pxScale.wp(20),
        paddingVertical: pxScale.wp(10),
        borderRadius: pxScale.hp(12),
        borderColor: 'rgba(72, 204, 247, 0.2)',
        borderWidth: 1,
        backgroundColor: 'rgba(72, 204, 247, 0.1)',
      }}>
      <AppSvg source={AppIcon.iconInfoCircleBlue} width={20} height={20} />
      <CustomText color={Colors.White} style={{marginLeft: pxScale.wp(8)}}>
        A malicious network provider can lie about the state of the blockchain
        and record your network activity. Only add custom networks you trust
      </CustomText>
    </Block>
  );

  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <Header title={'Custom networks'} goBack={goBack} />
      <Block style={styles.body}>
        {_renderHeader()}
        <Block>{_renderInput()}</Block>

        <Block center middle>
          <ButtonGradient
            onGradient
            middle
            center
            style={{
              height: pxScale.hp(40),
              backgroundColor: Colors.Blue_ice,
              borderRadius: 30,
              width: pxScale.wp(250),
            }}>
            <CustomText color={Colors.White} size={16} weight={'500'}>
              {constants.ADD}
            </CustomText>
          </ButtonGradient>
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default ChangePasswordScreen;
