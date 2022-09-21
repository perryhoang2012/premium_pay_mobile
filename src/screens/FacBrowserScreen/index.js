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
import {
  Animated,
  FlatList,
  ScrollView,
  useWindowDimensions,
  Platform,
  UIManager,
  LayoutAnimation,
  Linking,
} from 'react-native';
import images from '~assets/images';
import AppFastImage from '~components/AppFastImage';
import {ExpandingDot} from 'react-native-animated-pagination-dots';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FacBrowserScreen = () => {
  const {width} = useWindowDimensions();

  const navigation = useNavigation();

  const [onSearch, setOnSearch] = React.useState(false);

  const [valueSearch, setValueSearch] = React.useState('');
  const goBack = () => navigation.goBack();

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const submitSearch = () => {
    const url = 'https://www.google.com/search?q=' + valueSearch;

    Linking.openURL(url).catch(err => {
      alert("Don't know how to open URI: " + url);
    });
    // Linking.canOpenURL(url).then(supported => {
    //   if (supported) {
    //     Linking.openURL(url);
    //   } else {
    //     console.log("Don't know how to open URI: " + url);
    //   }
    // });
  };

  const data = [
    {id: 1, title: ' yOOts: mint t00bs', image: images.image_548},
    {id: 2, title: ' yOOts: mint t00bs', image: images.image_548},
    {id: 3, title: ' yOOts: mint t00bs', image: images.image_548},
  ];

  const renderDataOffer = () => {
    const data = [
      {id: 4, title: 'FACswap', image: images.imageLogoGradient},
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

  const renderItem = ({item}) => {
    return (
      <Block>
        <AppFastImage
          source={item.image}
          style={{
            width: width - 40,
            height: pxScale.hp(211),
            borderRadius: 10,
          }}
        />
        <CustomText
          color={Colors.White}
          weight={'500'}
          style={{marginTop: pxScale.hp(10)}}>
          {item.title}
        </CustomText>
      </Block>
    );
  };

  return (
    <Block flex style={styles.linearGradient}>
      <Header goBack={goBack} />
      <Block flex style={styles.body}>
        <Block row>
          <Block
            row
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              height: pxScale.hp(40),
              width: onSearch ? '80%' : '100%',
              paddingHorizontal: pxScale.hp(20),
              backgroundColor: Colors.Background_item,
              borderRadius: pxScale.hp(10),
            }}>
            {!onSearch && (
              <AppSvg source={AppIcon.iconSearch} width={20} height={20} />
            )}
            <CustomInput
              value={valueSearch}
              onSubmitEditing={() => submitSearch()}
              onFocus={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                setOnSearch(true);
              }}
              placeholder={constants.ENTER_WEBSITE}
              onChangeText={e => {
                if (!onSearch) {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                  setOnSearch(true);
                }

                setValueSearch(e);
              }}
              style={{color: Colors.White, width: '100%'}}
            />
          </Block>
          {onSearch && (
            <CustomButton
              center
              middle
              onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
                setOnSearch(false);
                setValueSearch('');
              }}
              style={{marginLeft: pxScale.wp(10), width: '20%'}}>
              <CustomText color={Colors.Blue_ice}>
                {constants.CANCEL}
              </CustomText>
            </CustomButton>
          )}
        </Block>

        <Block style={{marginTop: pxScale.hp(20)}}>
          <CustomText color={Colors.White} weight={'500'} letterSpacing={1}>
            {constants.OFFER}
          </CustomText>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{marginTop: pxScale.hp(16)}}>
            {renderDataOffer()}
          </ScrollView>
        </Block>

        <Block flex style={{marginTop: pxScale.hp(20)}}>
          <CustomText color={Colors.White} weight={'500'} letterSpacing={1}>
            {constants.NFT_MARKETPLACE}
          </CustomText>

          <Block flex style={{marginTop: pxScale.hp(12)}}>
            <Block flex>
              <FlatList
                data={data}
                keyExtractor={(item, index) => index}
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: scrollX}}}],
                  {
                    useNativeDriver: false,
                  },
                )}
                pagingEnabled
                horizontal
                decelerationRate={'normal'}
                scrollEventThrottle={16}
                renderItem={renderItem}
              />
            </Block>
            <Block style={{flex: 1}}>
              <ExpandingDot
                data={data}
                expandingDotWidth={27}
                scrollX={scrollX}
                inActiveDotOpacity={0.7}
                dotStyle={{
                  width: pxScale.wp(6),
                  height: pxScale.hp(6),
                  backgroundColor: '#48CCF7',
                  borderRadius: 5,
                  // marginHorizontal: 5,
                }}
                containerStyle={{
                  top: -10,
                }}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default FacBrowserScreen;
