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
      {title: 'TOKEN', value: 'token'},
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

  const renderContent = () => {
    return (
      <Block style={styles.viewItem}>
        <CustomText
          color={Colors.White}
          size={16}
          weight={'500'}
          letterSpacing={1}>
          {constants.DEFAULT}
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
      <HeaderDrawer title={'HISTORY'} noEye />
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
