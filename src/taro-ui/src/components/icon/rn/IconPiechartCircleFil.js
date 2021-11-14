/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconPiechartCircleFil = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8-8h-26c-53.9 0-106.3 10.6-155.5 31.4-47.5 20.1-90.3 48.9-127 85.6-36.7 36.7-65.5 79.4-85.6 127C82.6 446.2 72 498.5 72 552.5S82.6 658.7 103.4 708c20.1 47.5 48.9 90.3 85.6 127 36.7 36.7 79.4 65.5 127 85.6 49.3 20.9 101.7 31.5 155.6 31.5 53.9 0 106.3-10.6 155.5-31.4 47.5-20.1 90.3-48.9 127-85.6 36.7-36.7 65.5-79.4 85.6-127 20.9-49.3 31.5-101.7 31.5-155.6v-26c-0.1-4.4-3.7-8-8.1-8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M951 463l-2.6-28.2c-8.5-92-49.3-178.8-115.1-244.3-65.7-65.7-152.6-106.4-244.9-114.9L560.1 73c-4.7-0.4-8.7 3.2-8.7 7.9v383.7c0 4.4 3.6 8 8 8l383.6-1c4.7-0.1 8.4-4 8-8.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconPiechartCircleFil.defaultProps = {
  size: 18,
};

IconPiechartCircleFil = React.memo ? React.memo(IconPiechartCircleFil) : IconPiechartCircleFil;

export default IconPiechartCircleFil;