/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconExperimentFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M218.9 636.3l42.6 26.6c0.1 0.1 0.3 0.2 0.4 0.3l12.7 8 0.3 0.3c28.3 16.4 60.5 25.1 94.1 25.1 44.9 0 87.2-15.7 121-43.8 45.9-38.4 103.8-59.9 164.9-59.9 52.3 0 102.2 15.7 144.6 44.5l7.9 5-111.6-289V179.8h63.5c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8H264.7c-4.4 0-8 3.6-8 8v51.9c0 4.4 3.6 8 8 8h63.5v173.6L218.9 636.3z m333-203.1c22 0 39.9 17.9 39.9 39.9S573.9 513 551.9 513 512 495.1 512 473.1s17.9-39.9 39.9-39.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M878 825.1l-29.9-77.4-85.7-53.5-0.1 0.1c-0.7-0.5-1.5-1-2.2-1.5l-8.1-5-0.3-0.3c-29-17.5-62.3-26.8-97-26.8-44.9 0-87.2 15.7-121 43.8-45.9 38.4-103.8 59.9-164.9 59.9-53 0-103.5-16.1-146.2-45.6l-28.9-18.1L146 825.1c-2.8 7.4-4.3 15.2-4.3 23 0 35.2 28.6 63.8 63.8 63.8h612.9c7.9 0 15.7-1.5 23-4.3 33-12.6 49.4-49.6 36.6-82.5z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconExperimentFill.defaultProps = {
  size: 18,
};

export default IconExperimentFill;
