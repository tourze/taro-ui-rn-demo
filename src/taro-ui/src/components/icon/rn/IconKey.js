/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconKey = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5l-41.1 41.1-62.3-62.3c-3.1-3.1-8.2-3.1-11.4 0l-39.8 39.8c-3.1 3.1-3.1 8.2 0 11.4l62.3 62.3-44.9 44.9-62.3-62.3c-3.1-3.1-8.2-3.1-11.4 0l-39.8 39.8c-3.1 3.1-3.1 8.2 0 11.4l62.3 62.3-65.3 65.3c-3.1 3.1-3.1 8.2 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112z m161.2 465.2C726.2 620.3 668.9 644 608 644c-60.9 0-118.2-23.7-161.2-66.8-43.1-43-66.8-100.3-66.8-161.2 0-60.9 23.7-118.2 66.8-161.2 43-43.1 100.3-66.8 161.2-66.8 60.9 0 118.2 23.7 161.2 66.8 43.1 43 66.8 100.3 66.8 161.2 0 60.9-23.7 118.2-66.8 161.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconKey.defaultProps = {
  size: 18,
};

IconKey = React.memo ? React.memo(IconKey) : IconKey;

export default IconKey;
