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
          <CustomText medium color={Colors.White} size={14}>
            {item.id}
          </CustomText>
        </Block>
        <CustomText
          medium
          weight={'500'}
          color={Colors.White}
          style={style.viewMarginLeft}
          size={14}>
          {item.title}
        </CustomText>
      </Block>
    );
  };

  const _renderItemConfirmSeed = ({item, index}) => {
    return (
      <Block row middle style={style.viewItemSendPhase}>
        <Block center middle style={style.viewNumber}>
          <CustomText medium size={14} color={Colors.White}>
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
            <CustomText
              style={style.textCenter}
              color={Colors.White}
              regular
              size={15}>
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
                  regular
                  size={15}
                  style={style.textContentStepOne}
                  color={Colors.White}>
                  {constants.DO_NOT_SEE_YOUR_PHRASE}
                </CustomText>
              </Block>
              <Block row middle style={{marginTop: pxScale.hp(30)}}>
                <AppSvg source={AppIcon.iconLock} width={30} height={30} />
                <CustomText
                  regular
                  size={15}
                  style={style.textContentStepOne}
                  color={Colors.White}>
                  {constants.NEVER_TYPE_PHRASE}
                </CustomText>
              </Block>
              <Block row middle style={{marginTop: pxScale.hp(30)}}>
                <AppSvg source={AppIcon.iconBook} width={30} height={30} />
                <CustomText
                  regular
                  size={15}
                  style={style.textContentStepOne}
                  color={Colors.White}>
                  {constants.MAKE_AT_LEAST_2_COPIES}
                </CustomText>
              </Block>
            </Block>

            <Block style={style.viewMarginTop} center middle>
              <CustomButton
                middle
                center
                style={style.buttonStepOne}
                row
                onPress={() => setStep(2)}>
                <AppSvg source={AppIcon.iconCheck} width={14} height={14} />
                <CustomText
                  size={16}
                  color={Colors.White}
                  weight={'700'}
                  bold
                  style={{marginLeft: pxScale.wp(10)}}>
                  {constants.I_UNDERSTAND}
                </CustomText>
              </CustomButton>
            </Block>
          </Block>
        );

      case 2:
        return (
          <Block style={style.viewStepOne}>
            <CustomText
              color={Colors.White}
              regular
              size={14}
              style={{width: '80%', marginLeft: pxScale.wp(8), lineHeight: 20}}>
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
                <CustomButton
                  onGradient
                  middle
                  center
                  style={style.buttonCompleteStepTwo}
                  row
                  onPress={() => setStep(3)}>
                  <CustomText
                    bold
                    size={16}
                    color={Colors.Black}
                    style={style.textMarginLeft}
                    weight={'700'}>
                    {constants.COMPLETE_VERIFICATION}
                  </CustomText>
                </CustomButton>
                <CustomButton
                  middle
                  center
                  style={style.buttonGrayStepTwo}
                  row
                  onPress={() => setStep(2)}>
                  <CustomText
                    bold
                    size={16}
                    weight={'700'}
                    color={Colors.White}>
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
            <CustomText
              regular
              size={14}
              style={{width: '80%', marginLeft: pxScale.wp(8), lineHeight: 20}}
              color={Colors.White}>
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
              <CustomButton
                middle
                center
                style={[
                  style.buttonCompleteStepTwo,
                  {backgroundColor: Colors.Background_button},
                ]}
                row
                onPress={() => navigation.replace('AppDrawer')}>
                <CustomText weight={'700'} color={Colors.White} bold>
                  {constants.NEXT}
                </CustomText>
              </CustomButton>
            </Block>
          </Block>
        );
    }
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
        title={
          step === 1
            ? constants.CREATE_NEW_WALLET
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
