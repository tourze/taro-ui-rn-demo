/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSkin = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7c-4.1-17.4-19.5-29.3-37-29.3H154c-24.3 0-44 19.7-44 44v252c0 24.3 19.7 44 44 44h75v388c0 24.3 19.7 44 44 44h478c24.3 0 44-19.7 44-44V466h75c24.3 0 44-19.7 44-44V170c0-24.3-19.7-44-44-44z m-28 268H723v432H301V394H182V198h153.3c28.2 71.2 97.5 120 176.7 120s148.5-48.8 176.7-120H842v196z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSkin.defaultProps = {
  size: 18,
};

IconSkin = React.memo ? React.memo(IconSkin) : IconSkin;

export default IconSkin;
