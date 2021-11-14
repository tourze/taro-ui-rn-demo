/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconRobot = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M360 328m-60 0a60 60 0 1 0 120 0 60 60 0 1 0-120 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z m-32 660H204V128h616v596z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M664 328m-60 0a60 60 0 1 0 120 0 60 60 0 1 0-120 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M854.2 884H169.8c-16.5 0-29.8 14.3-29.8 32v36c0 4.4 3.3 8 7.4 8h729.1c4.1 0 7.4-3.6 7.4-8v-36c0.1-17.7-13.2-32-29.7-32zM664 508H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </svg>
  );
};

IconRobot.defaultProps = {
  size: 18,
};

export default IconRobot;
