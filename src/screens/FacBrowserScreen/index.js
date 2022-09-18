import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import Header from '~components/Header';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import constants from '~constants';
import {pxScale} from '~utils/funcHelper';
import CustomButton from '~components/CustomButton';
import {AppIcon} from '~assets/svg';
import AppSvg from '~components/AppSvg';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '~components/CustomInput';
import {ScrollView} from 'react-native';
import images from '~assets/images';
import AppFastImage from '~components/AppFastImage';

const FacBrowserScreen = () => {
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  const renderDataOffer = () => {
    const data = [
      {id: 1, title: 'Pancakes', image: images.imagePancakes},
      {id: 2, title: '1 inch', image: images.image1Inch},
      {id: 3, title: 'UniSwap', image: images.imageUniswap},
    ];

    return data.map((item, index) => (
      <Block center middle key={index} style={{marginRight: pxScale.wp(12)}}>
        <AppFastImage
          source={item.image}
          style={{width: pxScale.wp(74), height: pxScale.wp(74)}}
        />
        <CustomText color={Colors.White} style={{marginTop: pxScale.hp(5)}}>
          {item.title}
        </CustomText>
      </Block>
    ));
  };

  return (
    <Block style={styles.linearGradient}>
      <Block style={styles.body}>
        <Block
          row
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: pxScale.hp(40),
            width: '100%',
            paddingHorizontal: pxScale.hp(20),
            backgroundColor: Colors.Background_item,
            borderRadius: pxScale.hp(10),
          }}>
          <AppSvg source={AppIcon.iconSearch} width={20} height={20} />
          <CustomInput
            placeholder={constants.SEARCH}
            onChangeText={() => console.log('hihi')}
            style={{color: Colors.White}}
          />
        </Block>

        <Block style={{marginTop: pxScale.hp(20)}}>
          <CustomText color={Colors.White} weight={'500'} letterSpacing={1}>
            {constants.OFFER}
          </CustomText>

          <ScrollView horizontal style={{marginTop: pxScale.hp(16)}}>
            {renderDataOffer()}
          </ScrollView>
        </Block>

        <Block style={{marginTop: pxScale.hp(20)}}>
          <CustomText color={Colors.White} weight={'500'} letterSpacing={1}>
            {constants.NFT_MARKETPLACE}
          </CustomText>

          <Block style={{marginTop: pxScale.hp(12)}}>
            <AppFastImage
              source={images.image_548}
              style={{width: '100%', height: pxScale.hp(211), borderRadius: 10}}
            />

            <CustomText
              color={Colors.White}
              weight={'500'}
              style={{marginTop: pxScale.hp(10)}}>
              yOOts: mint t00bs
            </CustomText>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default FacBrowserScreen;
