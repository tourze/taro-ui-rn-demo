/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconPlayCircleFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m144.1 454.9L437.7 677.8c-1.4 1-3 1.5-4.7 1.5-4.4 0-8-3.6-8-8V353.7c0-1.7 0.5-3.3 1.5-4.7 2.6-3.6 7.6-4.4 11.2-1.8L656.1 506c0.7 0.5 1.3 1.1 1.8 1.8 2.6 3.5 1.8 8.5-1.8 11.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconPlayCircleFill.defaultProps = {
  size: 36,
};

export default IconPlayCircleFill;
