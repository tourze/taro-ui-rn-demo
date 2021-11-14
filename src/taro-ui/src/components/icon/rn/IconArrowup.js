/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconArrowup = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M868 545.5L536.1 163c-12.7-14.7-35.5-14.7-48.3 0L156 545.5c-4.5 5.2-0.8 13.2 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconArrowup.defaultProps = {
  size: 18,
};

IconArrowup = React.memo ? React.memo(IconArrowup) : IconArrowup;

export default IconArrowup;
