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
import {loginAPI} from '~apis/user';
import {useDispatch, useSelector} from 'react-redux';
import {cleanDataLocal, requestLogin} from '~redux/actions/user';

const RestoreWalletScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const token = useSelector(rootState => rootState?.token);

  const goBack = () => {
    navigation.goBack();
  };

  const [dataSeedPhase, setDataSeedPhase] = React.useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  const handleToken = React.useCallback(() => {
    if (token.length > 0) {
      navigation.replace('AppDrawer');
    }
  }, [navigation, token.length]);

  React.useEffect(() => {
    handleToken();
  }, [token, handleToken]);

  const handleLogin = React.useCallback(async () => {
    try {
      dispatch(
        requestLogin({mnemonic: dataSeedPhase.toString().replaceAll(',', ' ')}),
      );
    } catch (e) {}
  }, [dataSeedPhase, dispatch]);

  const _renderItemSeedPhase = React.useCallback(
    ({item, index}) => {
      return (
        <Block row middle style={style.viewItemSendPhase}>
          <Block center middle style={style.viewNumber}>
            <CustomText medium color={Colors.White} size={14}>
              {index + 1}
            </CustomText>
          </Block>
          <CustomInput
            style={{color: Colors.White, width: '80%'}}
            onChangeText={e => {
              const newArr = [...dataSeedPhase];
              newArr[index].title = e;
              setDataSeedPhase(newArr);
            }}
          />
        </Block>
      );
    },
    [dataSeedPhase],
  );

  const _renderBody = React.useCallback(() => {
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
            keyExtractor={(item, index) => index}
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
            onPress={() => {
              handleLogin();
            }}>
            <CustomText bold size={16} color={Colors.White} weight={'700'}>
              {constants.NEXT}
            </CustomText>
          </CustomButton>
        </Block>
      </Block>
    );
  }, [_renderItemSeedPhase, dataSeedPhase, navigation]);

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
