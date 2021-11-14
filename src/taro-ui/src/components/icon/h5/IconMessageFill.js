/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconMessageFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M924.3 338.4c-22.5-53.7-54.9-101.9-96.1-143.3-41.2-41.3-89.3-73.8-143-96.3C630.3 75.7 572.1 64 512 64h-2c-60.5 0.3-119 12.3-174.1 35.9-53.2 22.8-100.9 55.2-141.7 96.5-40.8 41.3-72.8 89.3-95 142.8C76.3 394.6 64.7 453.5 65 514.1c0.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8c61.5 31.1 130.2 47.7 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3 53.4-22.3 101.4-54.3 142.5-95.2 41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5 0.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48z m199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z m199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconMessageFill.defaultProps = {
  size: 18,
};

export default IconMessageFill;
