/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconStepBackward = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M347.591 528.95l383.21 301.024C745.05 841.166 766 831.078 766 813.024v-602.05c0-18.05-20.95-28.14-35.199-16.948l-383.21 301.023c-11.01 8.65-11.01 25.252 0 33.901M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconStepBackward.defaultProps = {
  size: 36,
};

export default IconStepBackward;
