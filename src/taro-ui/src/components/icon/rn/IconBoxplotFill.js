/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBoxplotFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M952 224h-52c-4.4 0-8 3.6-8 8v248h-92V304c0-4.4-3.6-8-8-8H448v432h344c4.4 0 8-3.6 8-8V548h92v244c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zM224 304v176h-92V232c0-4.4-3.6-8-8-8H72c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V548h92v172c0 4.4 3.6 8 8 8h152V296H232c-4.4 0-8 3.6-8 8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBoxplotFill.defaultProps = {
  size: 18,
};

IconBoxplotFill = React.memo ? React.memo(IconBoxplotFill) : IconBoxplotFill;

export default IconBoxplotFill;
