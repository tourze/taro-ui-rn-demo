/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFilterFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zM880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconFilterFill.defaultProps = {
  size: 36,
};

IconFilterFill = React.memo ? React.memo(IconFilterFill) : IconFilterFill;

export default IconFilterFill;
