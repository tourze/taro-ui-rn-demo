/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconEyecloseFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M942.3 486.4l-0.1-0.1-0.1-0.1c-36.4-76.7-80-138.7-130.7-186l-142 142c9.3 21.4 14.4 45.1 14.4 69.9 0 97.2-78.8 176-176 176-24.8 0-48.5-5.1-69.9-14.4l-122 122C374.6 823.8 439.8 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0.1-51.3zM878.3 154.2l-42.4-42.4c-3.1-3.1-8.2-3.1-11.3 0L707.8 228.5C649.4 200.2 584.2 186 512 186c-192.2 0-335.4 100.5-430.2 300.3v0.1c-7.7 16.2-7.7 35.2 0 51.5 36.4 76.7 80 138.7 130.7 186.1L111.8 824.5c-3.1 3.1-3.1 8.2 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0l712.8-712.8c3.1-3 3.1-8.1 0-11.2zM348.9 587.4C338.1 564.5 332 539 332 512c0-97.2 78.8-176 176-176 27 0 52.5 6.1 75.4 16.9L348.9 587.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconEyecloseFill.defaultProps = {
  size: 18,
};

IconEyecloseFill = React.memo ? React.memo(IconEyecloseFill) : IconEyecloseFill;

export default IconEyecloseFill;
