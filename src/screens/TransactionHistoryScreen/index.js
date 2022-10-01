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

const TransactionHistoryScreen = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const renderTab = () => {
    const tabs = [
      {title: 'AVAILABLE', value: 'available'},
      {title: 'IN PROGRESS', value: 'in_progress'},
      {title: 'SPENT', value: 'spent'},
      {title: 'UNAVAILABLE', value: 'unavailable'},
    ];
    return tabs.map((item, index) => (
      <CustomButton
        key={index}
        style={{marginRight: pxScale.hp(16)}}
        onPress={() => setActiveTab(index)}>
        <CustomText
          bold
          color={index === activeTab ? Colors.White : Colors.Gray}
          weight={'700'}
          size={14}
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

  const renderContent = () => {
    return (
      <Block style={styles.viewItem}>
        <CustomText
          color={Colors.White}
          size={14}
          weight={'600'}
          semiBold
          letterSpacing={1}>
          {constants.DEFAULT}
        </CustomText>
        <CustomText
          color={Colors.Gray}
          weight={'400'}
          regular
          size={12}
          style={{marginTop: pxScale.hp(4)}}>
          3XHPHamvtJkoU3XHPHam
        </CustomText>
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
      style={styles.linearGradient}>
      <HeaderDrawer title={'HISTORY'} noEye />
      <Block row middle style={styles.viewStatus}>
        <Block style={styles.gradientDot} />
        <CustomText
          color={Colors.Gray}
          weight={'500'}
          medium
          size={14}
          style={styles.textStatus}>
          {constants.ONLINE}
        </CustomText>
      </Block>
      <Block style={styles.body}>
        <Block style={styles.viewScrollView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {renderTab()}
          </ScrollView>
        </Block>
        <Block style={styles.viewContent}>{renderContent()}</Block>
      </Block>
    </LinearGradient>
  );
};

export default TransactionHistoryScreen;
