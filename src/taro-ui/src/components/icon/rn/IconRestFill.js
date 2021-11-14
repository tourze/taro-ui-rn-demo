/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconRestFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 256h-28.1l-35.7-120.9c-4-13.7-16.5-23.1-30.7-23.1h-451c-14.3 0-26.8 9.4-30.7 23.1L220.1 256H192c-17.7 0-32 14.3-32 32v28c0 4.4 3.6 8 8 8h45.8l47.7 558.7c1.4 16.6 15.3 29.3 31.9 29.3h429.2c16.6 0 30.5-12.7 31.9-29.3L802.2 324H856c4.4 0 8-3.6 8-8v-28c0-17.7-14.3-32-32-32zM508 704c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144zM291 256l22.4-76h397.2l22.4 76H291z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M508 560m-80 0a80 80 0 1 0 160 0 80 80 0 1 0-160 0Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconRestFill.defaultProps = {
  size: 18,
};

IconRestFill = React.memo ? React.memo(IconRestFill) : IconRestFill;

export default IconRestFill;
