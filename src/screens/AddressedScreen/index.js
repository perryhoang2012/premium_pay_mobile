import {ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import HeaderDrawer from '~components/HeaderDrawer';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import constants from '~constants';
import CustomButton from '~components/CustomButton';
import {pxScale} from '~utils/funcHelper';
import {FlatList} from 'react-native';
import AppSvg from '~components/AppSvg';
import {AppIcon} from '~assets/svg';

const AddressedScreen = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const data = [
    {id: 1, name: 'No Name', value: '3723d...4d134c'},
    {id: 1, name: 'No Name', value: '3723d...4d134c'},
    {id: 1, name: 'No Name', value: '3723d...4d134c'},
    {id: 1, name: 'No Name', value: '3723d...4d134c'},
  ];

  const renderTab = () => {
    const tabs = [
      {title: 'AVAILABLE', value: 'available'},
      {title: 'MY EXPIRED', value: 'my_expired'},
      {title: 'CONTACTS', value: 'contacts'},
    ];
    return tabs.map((item, index) => (
      <CustomButton
        key={index}
        style={{marginRight: pxScale.hp(16)}}
        onPress={() => setActiveTab(index)}>
        <CustomText
          color={index === activeTab ? Colors.White : Colors.Gray}
          weight={'500'}
          style={{letterSpacing: 1}}>
          {item.title}
        </CustomText>
        <Block
          style={[
            styles.viewUnderlined,
            {
              height: index === activeTab ? 2 : 0,
            },
          ]}
        />
      </CustomButton>
    ));
  };

  const renderContent = ({item, index}) => {
    return (
      <Block
        row
        style={[
          styles.viewItem,
          {
            borderTopLeftRadius: index === 0 ? 10 : 0,
            borderTopRightRadius: index === 0 ? 10 : 0,
            borderBottomLeftRadius: index === data.length - 1 ? 10 : 0,
            borderBottomRightRadius: index === data.length - 1 ? 10 : 0,
            backgroundColor:
              index % 2 === 0 ? Colors.Background_item : Colors.Blue_2,
          },
        ]}
        center
        middle>
        <Block flex>
          <CustomText color={Colors.White} size={16} weight={'500'}>
            {item.name}
          </CustomText>
          <CustomText
            color={Colors.White}
            weight={'400'}
            style={{marginTop: pxScale.hp(10)}}>
            {item.value}
          </CustomText>
        </Block>
        <Block>
          <AppSvg source={AppIcon.iconArrowRight} width={14} height={15} />
        </Block>
      </Block>
    );
  };

  return (
    <LinearGradient
      colors={[Colors.Gradient_start, Colors.Gradient_end]}
      style={styles.linearGradient}>
      <HeaderDrawer title={'ADDRESSED'} noEye />
      <Block row middle style={styles.viewStatus}>
        <Block style={styles.gradientDot} />
        <CustomText
          color={Colors.Gray}
          weight={'400'}
          size={16}
          style={styles.textStatus}>
          {constants.ONLINE}: random node supports online transaction only
        </CustomText>
      </Block>
      <Block style={styles.body}>
        <Block style={styles.viewScrollView}>
          <Block row space={'between'}>
            {renderTab()}
          </Block>
        </Block>
        <Block style={styles.viewContent}>
          <FlatList
            data={data}
            renderItem={renderContent}
            keyExtractor={(item, index) => index}
          />
        </Block>
      </Block>
    </LinearGradient>
  );
};

export default AddressedScreen;
