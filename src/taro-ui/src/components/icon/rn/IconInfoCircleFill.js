/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconInfoCircleFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272z m-32-344c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconInfoCircleFill.defaultProps = {
  size: 18,
};

IconInfoCircleFill = React.memo ? React.memo(IconInfoCircleFill) : IconInfoCircleFill;

export default IconInfoCircleFill;
