/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconStock = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M904 747H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM165.7 621.8l39.7 39.5c3.1 3.1 8.2 3.1 11.3 0l234.7-233.9 97.6 97.3c12.5 12.4 32.7 12.4 45.2 0l264.2-263.2c3.1-3.1 3.1-8.2 0-11.3l-39.7-39.6c-3.1-3.1-8.2-3.1-11.3 0l-235.7 235-97.7-97.3c-12.5-12.4-32.7-12.4-45.2 0L165.7 610.5c-3.1 3.1-3.2 8.2 0 11.3z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconStock.defaultProps = {
  size: 18,
};

IconStock = React.memo ? React.memo(IconStock) : IconStock;

export default IconStock;
