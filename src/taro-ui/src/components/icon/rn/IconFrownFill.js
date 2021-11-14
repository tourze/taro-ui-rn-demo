/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFrownFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z m376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-0.3 4.2-3.9 7.4-8.1 7.4H360c-4.6 0-8.2-3.8-8-8.4 4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6c0.2 4.6-3.4 8.4-8 8.4z m24-224c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFrownFill.defaultProps = {
  size: 18,
};

IconFrownFill = React.memo ? React.memo(IconFrownFill) : IconFrownFill;

export default IconFrownFill;
