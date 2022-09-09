import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '~assets/colors';
import styles from './styles';
import HeaderDrawer from '~components/HeaderDrawer';
import Block from '~components/Block';
import CustomText from '~components/CustomText';
import constants from '~constants';
import ScrollableTabView, {
  DefaultTabBar,
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import CustomButton from '~components/CustomButton';
import {pxScale} from '~utils/funcHelper';

const AddressedScreen = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const renderTab = () => {
    const tabs = [
      {title: 'AVAILABLE', value: 'available'},
      {title: 'IN PROGESS', value: 'in_progess'},
      {title: 'SPENT', value: 'spent'},
      {title: 'UNAVAILABLE', value: 'unavailable'},
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
          style={{
            marginTop: pxScale.hp(5),
            height: index === activeTab ? 2 : 0,
            backgroundColor: Colors.Blue_ice,
          }}></Block>
      </CustomButton>
    ));
  };

  const renderContent = () => {
    return (
      <Block
        style={{
          height: pxScale.hp(420),
          backgroundColor: Colors.Background_item,
          padding: 20,
          borderRadius: pxScale.hp(12),
          marginBottom: pxScale.hp(16),
          marginTop: pxScale.hp(10),
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1,
          paddingRight: pxScale.wp(20),
        }}>
        <CustomText
          color={Colors.White}
          size={16}
          weight={'500'}
          style={{letterSpacing: 1}}>
          Default
        </CustomText>
        <CustomText
          color={Colors.White}
          weight={'400'}
          style={{marginTop: pxScale.hp(10)}}>
          3XHPHamvtJkoU3XHPHam
        </CustomText>
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
          weight={'500'}
          size={16}
          style={styles.textStatus}>
          {constants.ONLINE}
        </CustomText>
      </Block>
      <Block style={styles.body}>
        <Block
          style={{marginTop: pxScale.hp(20), marginBottom: pxScale.hp(20)}}>
          <ScrollView horizontal>{renderTab()}</ScrollView>
        </Block>
        <Block style={{paddingRight: pxScale.wp(20)}}>{renderContent()}</Block>
      </Block>
    </LinearGradient>
  );
};

export default AddressedScreen;
