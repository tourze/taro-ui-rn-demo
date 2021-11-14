/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconShrink = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M881.7 187.4l-45.1-45.1c-3.1-3.1-8.2-3.1-11.3 0L667.8 299.9l-54.7-54.7c-4.7-4.7-12.7-1.9-13.5 4.7L576.1 439c-0.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-0.8 9.3-8.8 4.7-13.5l-54.7-54.7 157.6-157.6c3-3 3-8.1-0.1-11.2zM439 576.1l-189.2 23.5c-6.6 0.8-9.3 8.9-4.7 13.5l54.7 54.7-157.5 157.5c-3.1 3.1-3.1 8.2 0 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l157.6-157.6 54.7 54.7c4.7 4.7 12.7 1.9 13.5-4.7L447.9 585c0.7-5.2-3.7-9.6-8.9-8.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShrink.defaultProps = {
  size: 18,
};

IconShrink = React.memo ? React.memo(IconShrink) : IconShrink;

export default IconShrink;
