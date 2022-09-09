// import {FlatList, StyleSheet} from 'react-native';
// import React from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import Colors from '~assets/colors';
// import style from './style';
// import Header from '~components/Header';
// import {useNavigation} from '@react-navigation/native';
// import Block from '~components/Block';
// import constants from '~constants';
// import CustomText from '~components/CustomText';
// import {pxScale} from '~utils/funcHelper';
// // import FontAwesome from 'react-native-vector-icons/FontAwesome';
// // import AntDesign from 'react-native-vector-icons/AntDesign';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import Fontisto from 'react-native-vector-icons/Fontisto';
// import CustomButton from '~components/CustomButton';
// import CustomInput from '~components/CustomInput';

// const CreateNewWallet = () => {
//   const navigation = useNavigation();

//   const [step, setStep] = React.useState(1);

//   const [stateConfirm, setStateConfirm] = React.useState([
//     {id: 1},
//     {id: 4},
//     {id: 5},
//     {id: 8},
//     {id: 11},
//     {id: 12},
//   ]);

//   const goBack = () => {
//     switch (step) {
//       case 1:
//         navigation.goBack();
//         break;
//       case 2:
//         setStep(1);
//         break;
//       case 3:
//         setStep(2);
//         break;
//     }
//   };

//   const dataSeedPhase = [
//     {id: 1, title: 'cart'},
//     {id: 2, title: 'roof'},
//     {id: 3, title: 'promote'},
//     {id: 4, title: 'mask'},
//     {id: 5, title: 'scout'},
//     {id: 6, title: 'scene'},
//     {id: 7, title: 'trend'},
//     {id: 8, title: 'ankle'},
//     {id: 9, title: 'rally'},
//     {id: 10, title: 'alcohol'},
//     {id: 11, title: 'melody'},
//     {id: 12, title: 'bread'},
//   ];

//   const _renderItemSeedPhase = ({item, index}) => {
//     return (
//       <Block
//         row
//         middle
//         style={{
//           borderRadius: 30,
//           padding: 10,
//           borderWidth: 0.4,
//           borderColor: Colors.Blue_ice,
//           width: pxScale.wp(120),
//           height: pxScale.hp(40),
//           marginBottom: pxScale.hp(30),
//           marginLeft: pxScale.hp(30),
//           marginRight: pxScale.hp(30),
//         }}>
//         <Block
//           center
//           middle
//           style={{
//             backgroundColor: '#1B4356',
//             width: pxScale.wp(20),
//             height: pxScale.hp(20),
//             borderRadius: 10,
//           }}>
//           <CustomText color={Colors.White} size={12}>
//             {item.id}
//           </CustomText>
//         </Block>
//         <CustomText color={Colors.White} style={{marginLeft: 10}}>
//           {item.title}
//         </CustomText>
//       </Block>
//     );
//   };

//   const _renderItemConfirmSeed = ({item, index}) => {
//     return (
//       <Block
//         row
//         middle
//         style={{
//           borderRadius: 30,
//           padding: 10,
//           borderWidth: 0.4,
//           borderColor: Colors.Blue_ice,
//           width: pxScale.wp(120),
//           height: pxScale.hp(40),
//           marginBottom: pxScale.hp(30),
//           marginLeft: pxScale.hp(30),
//           marginRight: pxScale.hp(30),
//         }}>
//         <Block
//           center
//           middle
//           style={{
//             backgroundColor: '#1B4356',
//             width: pxScale.wp(20),
//             height: pxScale.hp(20),
//             borderRadius: 10,
//           }}>
//           <CustomText color={Colors.White} size={12}>
//             {item.id}
//           </CustomText>
//         </Block>
//         <CustomInput
//           style={{width: pxScale.wp(90), color: Colors.White}}
//           value={item.value}
//           onChangeText={e => {
//             let newArr = [...stateConfirm];
//             newArr[index].value = e;
//             setStateConfirm(newArr);
//           }}
//         />
//       </Block>
//     );
//   };
//   const _renderBody = () => {
//     switch (step) {
//       case 1:
//         return (
//           <Block style={{marginTop: pxScale.hp(20), padding: 10}}>
//             <CustomText style={{textAlign: 'center'}} color={Colors.White}>
//               {constants.SUBTITLE_CREATE_WALLET}
//             </CustomText>
//             <Block
//               style={{
//                 marginTop: pxScale.hp(35),
//                 paddingLeft: 10,
//                 paddingRight: 10,
//               }}>
//               <Block row middle>
//                 <FontAwesome name="eye" size={45} color={Colors.Blue_ice} />
//                 <CustomText
//                   style={{marginLeft: 10, width: pxScale.wp(250)}}
//                   color={Colors.White}>
//                   {constants.DO_NOT_SEE_YOUR_PHRASE}
//                 </CustomText>
//               </Block>
//               <Block row middle style={{marginTop: pxScale.hp(30)}}>
//                 <MaterialCommunityIcons
//                   name="server-security"
//                   size={45}
//                   color={Colors.Blue_ice}
//                 />
//                 <CustomText
//                   style={{marginLeft: 10, width: pxScale.wp(270)}}
//                   color={Colors.White}>
//                   {constants.NEVER_TYPE_PHRASE}
//                 </CustomText>
//               </Block>
//               <Block row middle style={{marginTop: pxScale.hp(30)}}>
//                 <AntDesign name="copy1" size={45} color={Colors.Blue_ice} />
//                 <CustomText
//                   style={{marginLeft: 10, width: pxScale.wp(270)}}
//                   color={Colors.White}>
//                   {constants.DO_NOT_SEE_YOUR_PHRASE}
//                 </CustomText>
//               </Block>
//             </Block>

//             <Block style={{marginTop: pxScale.hp(70)}} center middle>
//               <CustomButton
//                 middle
//                 center
//                 style={{
//                   height: pxScale.hp(40),
//                   backgroundColor: Colors.Blue_ice,
//                   borderRadius: 30,
//                   minWidth: pxScale.wp(250),
//                 }}
//                 row
//                 onPress={() => setStep(2)}>
//                 <AntDesign name="check" size={20} color={Colors.Black} />
//                 <CustomText style={{marginLeft: 4}} weight={'500'}>
//                   {constants.I_UNDERSTAND}
//                 </CustomText>
//               </CustomButton>
//             </Block>
//           </Block>
//         );

//       case 2:
//         return (
//           <Block style={{marginTop: pxScale.hp(20), padding: 10}}>
//             <CustomText style={{textAlign: 'center'}} color={Colors.White}>
//               {constants.SUBTITLE_SEND_PHASE}
//             </CustomText>
//             <Block
//               style={{
//                 marginTop: pxScale.hp(35),
//                 paddingLeft: 10,
//                 paddingRight: 10,
//                 alignItems: 'center',
//               }}>
//               <FlatList
//                 scrollEnabled={false}
//                 data={dataSeedPhase}
//                 renderItem={_renderItemSeedPhase}
//                 keyExtractor={item => item.id}
//                 numColumns={2}
//                 horizontal={false}
//               />
//               <Block style={{marginTop: pxScale.hp(30)}} center middle>
//                 <CustomButton
//                   middle
//                   center
//                   style={{
//                     height: pxScale.hp(40),
//                     backgroundColor: Colors.Blue_ice,
//                     borderRadius: 30,
//                     minWidth: pxScale.wp(250),
//                   }}
//                   row
//                   onPress={() => setStep(3)}>
//                   <Fontisto name="locked" size={16} color={Colors.Black} />
//                   <CustomText style={{marginLeft: 6}} weight={'500'}>
//                     {constants.COMPLETE_VERIFICATION}
//                   </CustomText>
//                 </CustomButton>
//                 <CustomButton
//                   middle
//                   center
//                   style={{
//                     height: pxScale.hp(40),
//                     backgroundColor: Colors.Black,
//                     borderRadius: 30,
//                     minWidth: pxScale.wp(250),
//                     marginTop: pxScale.hp(20),
//                   }}
//                   row
//                   onPress={() => setStep(2)}>
//                   <AntDesign name="arrowright" size={20} color={Colors.White} />
//                   <CustomText
//                     style={{marginLeft: 4}}
//                     weight={'500'}
//                     color={Colors.White}>
//                     {constants.I_WILL_DO_IT_LATER}
//                   </CustomText>
//                 </CustomButton>
//               </Block>
//             </Block>
//           </Block>
//         );

//       case 3:
//         return (
//           <Block style={{marginTop: pxScale.hp(20), padding: 10}}>
//             <CustomText style={{textAlign: 'center'}} color={Colors.White}>
//               {constants.SUBTITLE_CONFIRM_SEED_PHASE}
//             </CustomText>
//             <Block
//               style={{
//                 marginTop: pxScale.hp(35),
//                 paddingLeft: 10,
//                 paddingRight: 10,
//                 alignItems: 'center',
//               }}>
//               <FlatList
//                 scrollEnabled={false}
//                 data={stateConfirm}
//                 renderItem={_renderItemConfirmSeed}
//                 keyExtractor={item => item.id}
//                 numColumns={2}
//                 horizontal={false}
//               />
//             </Block>
//             <Block style={{marginTop: pxScale.hp(70)}} center middle>
//               <CustomButton
//                 middle
//                 center
//                 style={{
//                   height: pxScale.hp(40),
//                   backgroundColor: Colors.Blue_ice,
//                   borderRadius: 30,
//                   minWidth: pxScale.wp(250),
//                 }}
//                 row
//                 onPress={() => setStep(2)}>
//                 <AntDesign name="arrowright" size={20} color={Colors.Black} />
//                 <CustomText style={{marginLeft: 6}} weight={'500'}>
//                   {constants.NEXT}
//                 </CustomText>
//               </CustomButton>
//             </Block>
//           </Block>
//         );
//     }
//   };
//   return (
//     <LinearGradient
//       colors={[Colors.Gradient_start, Colors.Gradient_end]}
//       style={style.linearGradient}>
//       <Header
//         title={
//           step === 1
//             ? constants.CREATE_NEW_WALLET
//             : step === 2
//             ? constants.SEND_PHASE
//             : constants.CONFIRM_SEND_PHASE
//         }
//         goBack={goBack}
//         styleTitle={style.textTitle}
//       />

//       <Block style={style.body}>{_renderBody()}</Block>
//     </LinearGradient>
//   );
// };

// export default CreateNewWallet;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const index = () => {
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
