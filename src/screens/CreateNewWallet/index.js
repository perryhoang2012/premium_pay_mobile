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

const CreateNewWallet = () => {
  const navigation = useNavigation();

  const [step, setStep] = React.useState(1);

  const [stateConfirm, setStateConfirm] = React.useState([
    {id: 1},
    {id: 4},
    {id: 5},
    {id: 8},
    {id: 11},
    {id: 12},
  ]);

  const goBack = () => {
    switch (step) {
      case 1:
        navigation.goBack();
        break;
      case 2:
        setStep(1);
        break;
      case 3:
        setStep(2);
        break;
    }
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
          <CustomText color={Colors.White} size={12}>
            {item.id}
          </CustomText>
        </Block>
        <CustomText color={Colors.White} style={style.viewMarginLeft}>
          {item.title}
        </CustomText>
      </Block>
    );
  };

  const _renderItemConfirmSeed = ({item, index}) => {
    return (
      <Block row middle style={style.viewItemSendPhase}>
        <Block center middle style={style.viewNumber}>
          <CustomText color={Colors.White} size={12}>
            {item.id}
          </CustomText>
        </Block>
        <CustomInput
          style={style.inputConfirm}
          value={item.value}
          onChangeText={e => {
            let newArr = [...stateConfirm];
            newArr[index].value = e;
            setStateConfirm(newArr);
          }}
        />
      </Block>
    );
  };
  const _renderBody = () => {
    switch (step) {
      case 1:
        return (
          <Block style={style.viewStepOne}>
            <CustomText style={style.textCenter} color={Colors.White}>
              {constants.SUBTITLE_CREATE_WALLET}
            </CustomText>
            <Block style={style.viewContentStepOne}>
              <Block row middle>
                <AppSvg
                  source={AppIcon.iconEyeSecurity}
                  width={30}
                  height={30}
                />
                <CustomText
                  style={style.textContentStepOne}
                  color={Colors.White}>
                  {constants.DO_NOT_SEE_YOUR_PHRASE}
                </CustomText>
              </Block>
              <Block row middle style={{marginTop: pxScale.hp(30)}}>
                <AppSvg source={AppIcon.iconLock} width={30} height={30} />
                <CustomText
                  style={style.textContentStepOne}
                  color={Colors.White}>
                  {constants.NEVER_TYPE_PHRASE}
                </CustomText>
              </Block>
              <Block row middle style={{marginTop: pxScale.hp(30)}}>
                <AppSvg source={AppIcon.iconBook} width={30} height={30} />
                <CustomText
                  style={style.textContentStepOne}
                  color={Colors.White}>
                  {constants.DO_NOT_SEE_YOUR_PHRASE}
                </CustomText>
              </Block>
            </Block>

            <Block style={style.viewMarginTop} center middle>
              <ButtonGradient
                onGradient
                middle
                center
                style={style.buttonStepOne}
                row
                onPress={() => setStep(2)}>
                <CustomText color={Colors.White} weight={'500'}>
                  {constants.I_UNDERSTAND}
                </CustomText>
              </ButtonGradient>
            </Block>
          </Block>
        );

      case 2:
        return (
          <Block style={style.viewStepOne}>
            <CustomText style={style.textCenter} color={Colors.White}>
              {constants.SUBTITLE_SEND_PHASE}
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
              <Block style={{marginTop: pxScale.hp(30)}} center middle>
                <ButtonGradient
                  onGradient
                  middle
                  center
                  style={style.buttonCompleteStepTwo}
                  row
                  onPress={() => setStep(3)}>
                  <CustomText
                    color={Colors.White}
                    style={style.textMarginLeft}
                    weight={'500'}>
                    {constants.COMPLETE_VERIFICATION}
                  </CustomText>
                </ButtonGradient>
                <CustomButton
                  middle
                  center
                  style={style.buttonGrayStepTwo}
                  row
                  onPress={() => setStep(2)}>
                  <CustomText weight={'500'} color={Colors.White}>
                    {constants.I_WILL_DO_IT_LATER}
                  </CustomText>
                </CustomButton>
              </Block>
            </Block>
          </Block>
        );

      case 3:
        return (
          <Block style={style.viewStepOne}>
            <CustomText style={style.textCenter} color={Colors.White}>
              {constants.SUBTITLE_CONFIRM_SEED_PHASE}
            </CustomText>
            <Block style={style.viewFlatListStepTwo}>
              <FlatList
                scrollEnabled={false}
                data={stateConfirm}
                renderItem={_renderItemConfirmSeed}
                keyExtractor={item => item.id}
                numColumns={2}
                horizontal={false}
              />
            </Block>
            <Block style={style.viewMarginTop} center middle>
              <ButtonGradient
                onGradient
                middle
                center
                style={style.buttonCompleteStepTwo}
                row
                onPress={() => navigation.replace('AppDrawer')}>
                <CustomText color={Colors.White} weight={'500'}>
                  {constants.NEXT}
                </CustomText>
              </ButtonGradient>
            </Block>
          </Block>
        );
    }
  };
  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={style.linearGradient}>
      <Header
        title={
          step === 1
            ? constants.CREATE_NEW_WALLET
            : step === 2
            ? constants.SEND_PHASE
            : constants.CONFIRM_SEND_PHASE
        }
        goBack={goBack}
        styleTitle={style.textTitle}
      />

      <Block style={style.body}>{_renderBody()}</Block>
    </LinearGradient>
  );
};

export default CreateNewWallet;
