import React from 'react';
import {SvgCss, SvgXml} from 'react-native-svg';

const AppSvg = ({source, height, width}) => {
  return <SvgXml width={width} height={height} xml={source} />;
};

export default React.memo(AppSvg);
