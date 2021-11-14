/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconGoogleplus = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M879.5 470.4c-0.3-27-0.4-54.2-0.5-81.3h-80.8c-0.3 27-0.5 54.1-0.7 81.3-27.2 0.1-54.2 0.3-81.2 0.6v80.9c27 0.3 54.2 0.5 81.2 0.8 0.3 27 0.3 54.1 0.5 81.1h80.9c0.1-27 0.3-54.1 0.5-81.3 27.2-0.3 54.2-0.4 81.2-0.7v-80.9c-26.9-0.2-54.1-0.2-81.1-0.5zM349.5 470.8c-0.1 32.3 0 64.7 0.1 97 54.2 1.8 108.5 1 162.7 1.8-23.9 120.3-187.4 159.3-273.9 80.7-89-68.9-84.8-220 7.7-284 64.7-51.6 156.6-38.9 221.3 5.8 25.4-23.5 49.2-48.7 72.1-74.7-53.8-42.9-119.8-73.5-190-70.3-146.6-4.9-281.3 123.5-283.7 270.2-9.4 119.9 69.4 237.4 180.6 279.8 110.8 42.7 252.9 13.6 323.7-86 46.7-62.9 56.8-143.9 51.3-220-90.7-0.7-181.3-0.6-271.9-0.3z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconGoogleplus.defaultProps = {
  size: 18,
};

export default IconGoogleplus;
