/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconTrademark = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M599.5 549.3c34.8-12.8 78.4-49 78.4-119.2 0-71.2-45.5-131.1-144.2-131.1H378c-4.4 0-8 3.6-8 8v410c0 4.4 3.6 8 8 8h54.5c4.4 0 8-3.6 8-8V561.2h88.7l74.6 159.2c1.3 2.8 4.1 4.6 7.2 4.6h62c1.2 0 2.4-0.3 3.5-0.8 4-2 5.6-6.7 3.6-10.7l-80.6-164.2zM522 505h-81.5V357h83.4c48 0 80.9 25.3 80.9 75.5 0 46.9-29.8 72.5-82.8 72.5z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconTrademark.defaultProps = {
  size: 18,
};

export default IconTrademark;
