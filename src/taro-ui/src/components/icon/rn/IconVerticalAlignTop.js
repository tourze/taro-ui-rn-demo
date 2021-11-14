/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconVerticalAlignTop = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355c-3.2-4.1-9.4-4.1-12.6 0l-112 141.7c-4.1 5.2-0.4 12.9 6.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconVerticalAlignTop.defaultProps = {
  size: 18,
};

IconVerticalAlignTop = React.memo ? React.memo(IconVerticalAlignTop) : IconVerticalAlignTop;

export default IconVerticalAlignTop;
