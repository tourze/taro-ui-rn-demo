/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconStepBackward = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M347.591 528.95l383.21 301.024C745.05 841.166 766 831.078 766 813.024v-602.05c0-18.05-20.95-28.14-35.199-16.948l-383.21 301.023c-11.01 8.65-11.01 25.252 0 33.901M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconStepBackward.defaultProps = {
  size: 18,
};

IconStepBackward = React.memo ? React.memo(IconStepBackward) : IconStepBackward;

export default IconStepBackward;
