/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconRollback = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112c-4.1 3.2-4.1 9.4 0 12.6l142 112c5.2 4.1 12.9 0.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconRollback.defaultProps = {
  size: 18,
};

export default IconRollback;
