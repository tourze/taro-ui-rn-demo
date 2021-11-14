/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconSlackSquareFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M893.1 397.6c-85.8-286-209.5-352.5-495.5-266.7S45.1 340.4 130.9 626.4s209.5 352.5 495.5 266.7 352.5-209.5 266.7-495.5z m-150 189.9l-50.3 16.3 16.5 50.6c7.7 23.6-5.3 49-28.9 56.7-23.6 7.7-49-5.3-56.7-28.9l-16.5-50.6L506 664.5l16.5 50.6c7.7 23.6-5.3 49-28.9 56.7-23.6 7.7-49-5.3-56.7-28.9l-16.5-50.6-51 16.6c-23.6 7.7-49-5.3-56.7-28.9s5.3-49 28.9-56.7l51-16.6-32.9-101.3-51 16.6c-23.6 7.7-49-5.3-56.7-28.9-7.7-23.6 5.3-49 28.9-56.7l51-16.6-16.5-50.6c-7.7-23.6 5.3-49 28.9-56.7 23.6-7.7 49 5.3 56.7 28.9l16.5 50.6 101.3-32.9-16.5-50.6c-7.7-23.6 5.3-49 28.9-56.7s49 5.3 56.7 28.9l16.5 50.6 50.3-16.3c23.6-7.7 49 5.3 56.7 28.9 7.7 23.6-5.3 49-28.9 56.7L632.1 417 665 518.3l50.3-16.3c23.6-7.7 49 5.3 56.7 28.9 7.7 23.6-5.3 48.9-28.9 56.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M445.262 477.673l101.293-32.909 32.908 101.293-101.292 32.908z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconSlackSquareFill.defaultProps = {
  size: 18,
};

export default IconSlackSquareFill;
