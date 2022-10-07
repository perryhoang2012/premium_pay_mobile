import {FlatList} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import style from './style';
import Header from '~components/Header';
import {useNavigation} from '@react-navigation/native';
import Block from '~components/Block';
import constants from '~constants';
import CustomText from '~components/CustomText';
import {pxScale} from '~utils/funcHelper';
import CustomButton from '~components/CustomButton';
import CustomInput from '~components/CustomInput';
import ButtonGradient from '~components/ButtonGradient';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';

const RestoreWalletScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const dataSeedPhase = [
    {id: 1, title: 'cart'},
    {id: 2, title: 'roof'},
    {id: 3, title: 'promote'},
    {id: 4, title: 'mask'},
    {id: 5, title: 'scout'},
    {id: 6, title: 'scene'},
    {id: 7, title: 'trend'},
    {id: 8, title: 'ankle'},
    {id: 9, title: 'rally'},
    {id: 10, title: 'alcohol'},
    {id: 11, title: 'melody'},
    {id: 12, title: 'bread'},
  ];

  const _renderItemSeedPhase = ({item, index}) => {
    return (
      <Block row middle style={style.viewItemSendPhase}>
        <Block center middle style={style.viewNumber}>
          <CustomText medium color={Colors.White} size={14}>
            {item.id}
          </CustomText>
        </Block>
        <CustomInput />
      </Block>
    );
  };

  const _renderBody = () => {
    return (
      <Block style={style.viewStepOne}>
        <CustomText
          regular
          size={14}
          style={style.textCenter}
          color={Colors.White}>
          {constants.SUBTITLE_RESTORE_WALLET}
        </CustomText>
        <Block style={style.viewFlatListStepTwo}>
          <FlatList
            scrollEnabled={false}
            data={dataSeedPhase}
            renderItem={_renderItemSeedPhase}
            keyExtractor={item => item.id}
            numColumns={2}
            horizontal={false}
          />
        </Block>

        <Block style={style.viewMarginTop} center middle>
          <CustomButton
            middle
            center
            style={style.buttonStepOne}
            row
            onPress={() => navigation.replace('AppDrawer')}>
            <CustomText bold size={16} color={Colors.White} weight={'700'}>
              {constants.NEXT}
            </CustomText>
          </CustomButton>
        </Block>
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
      style={style.linearGradient}>
      <Header
        title={constants.RESTORE_WALLET_UP_CASE}
        goBack={goBack}
        styleTitle={style.textTitle}
      />

      <Block style={style.body}>{_renderBody()}</Block>
    </LinearGradient>
  );
};

export default RestoreWalletScreen;
