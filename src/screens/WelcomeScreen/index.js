// import React, {Component} from 'react';
// import {StyleSheet, View, Dimensions, PixelRatio, Image} from 'react-native';
// import {gyroscope} from 'react-native-sensors';

// const window = Dimensions.get('window');

// const deviceWidth = window.width;
// const deviceHeight = window.height;

// const imageWidth = 8 * deviceWidth;
// const imageHeight = deviceHeight;

// const WelcomeScreen = () => {
//   const [state, setState] = React.useState({
//     image: `https://placeimg.com/${PixelRatio.getPixelSizeForLayoutSize(
//       imageWidth,
//     )}/${PixelRatio.getPixelSizeForLayoutSize(imageHeight)}/any`,
//     y: 0,
//   });

//   React.useEffect(() => {
//     const subscription = gyroscope.subscribe(({y}) => {
//       setState(pre => ({
//         y: y + pre.y,
//       }));
//     });
//     return () => {
//       subscription.remove();
//     };
//   }, []);

//   const positionOnScreenX = -imageWidth / 2;
//   // The y axis of the sensor data resembles what we need for the x axis
//   // in the image
//   const movementX = (-state.y / 1000) * imageWidth;
//   return (
//     <View style={styles.container}>
//       <Image
//         translateX={positionOnScreenX + movementX}
//         style={styles.image}
//         source={{uri: state.image}}
//       />
//     </View>
//   );
// };

// export default WelcomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   image: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     height: imageHeight,
//     width: imageWidth,
//   },
// });
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
