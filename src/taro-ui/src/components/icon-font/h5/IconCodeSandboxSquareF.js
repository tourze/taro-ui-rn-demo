/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconCodeSandboxSquareF = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M307.9 536.7l87.6 49.9V681l96.7 55.9V524.8L307.9 418.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM755.7 653.2L512 794 268.3 653.2V371.8l110-63.6-0.4-0.2h0.2L512 231l134 77h-0.2l-0.3 0.2 110.1 63.6v281.4z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M531.8 736.9l97.3-56.2v-94.1l87-49.5V418.5L531.8 525zM511.8 384.9L418 331l-91.1 52.6 185.2 107 185.2-106.9-91.4-52.8z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

IconCodeSandboxSquareF.defaultProps = {
  size: 36,
};

export default IconCodeSandboxSquareF;
