/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconMedium = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M834.7 279.8l61.3-58.9V208H683.7L532.4 586.4 360.3 208H137.7v12.9l71.6 86.6c7 6.4 10.6 15.8 9.7 25.2V673c2.2 12.3-1.7 24.8-10.3 33.7L128 805v12.7h228.6v-12.9l-80.6-98c-8.7-8.9-12.9-21.3-11.1-33.7V378.7l200.7 439.2h23.3l172.6-439.2v349.9c0 9.2 0 11.1-6 17.2l-62.1 60.3V819h301.2v-12.9l-59.9-58.9c-5.2-4-7.9-10.7-6.8-17.2V297c-1.1-6.5 1.6-13.2 6.8-17.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconMedium.defaultProps = {
  size: 18,
};

export default IconMedium;