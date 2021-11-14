/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconCrownFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M899.6 276.5L705 396.4 518.4 147.5c-3.2-4.3-9.6-4.3-12.9 0L319 396.4 124.3 276.5c-5.7-3.5-13.1 1.2-12.2 7.9L188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c0.8-6.7-6.5-11.4-12.3-7.9zM512 734.2c-62.1 0-112.6-50.5-112.6-112.6S449.9 509 512 509s112.6 50.5 112.6 112.6S574.1 734.2 512 734.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M512 573.3c-26.6 0-48.2 21.6-48.2 48.3 0 26.6 21.6 48.3 48.2 48.3s48.2-21.6 48.2-48.3c0-26.6-21.6-48.3-48.2-48.3z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconCrownFill.defaultProps = {
  size: 18,
};

IconCrownFill = React.memo ? React.memo(IconCrownFill) : IconCrownFill;

export default IconCrownFill;
