/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconRedo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2-29.4-29.4-52.5-63.6-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5c-16.1 38.1-39.2 72.3-68.6 101.7-9.3 9.3-19.1 18-29.3 26L668.2 724c-4.1-5.3-12.5-3.5-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 0.8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRedo.defaultProps = {
  size: 18,
};

IconRedo = React.memo ? React.memo(IconRedo) : IconRedo;

export default IconRedo;
