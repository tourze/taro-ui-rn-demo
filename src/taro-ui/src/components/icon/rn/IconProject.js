/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconProject = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zM472 472h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zM664 544h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconProject.defaultProps = {
  size: 18,
};

IconProject = React.memo ? React.memo(IconProject) : IconProject;

export default IconProject;
