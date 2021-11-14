/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFilesync = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M296 256c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zM488 456v-48c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M440 852H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h272c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M544.1 736.4c1.8-34.5 16.2-66.8 40.8-91.4 26.2-26.2 62-41 99.1-41 37.4 0 72.6 14.6 99.1 41 3.2 3.2 6.3 6.6 9.2 10.1L769.2 673c-5.3 4.1-3.5 12.5 3 14.1l93.3 22.5c5 1.2 9.8-2.6 9.9-7.7l0.6-95.4c0-6.7-7.6-10.5-12.9-6.4l-20.3 15.8C805.4 569.6 748.1 540 684 540c-109.9 0-199.6 86.9-204 195.7-0.2 4.5 3.5 8.3 8 8.3h48.1c4.3 0 7.8-3.3 8-7.6zM880 744h-48.1c-4.3 0-7.8 3.3-8 7.6-1.8 34.5-16.2 66.8-40.8 91.4-26.2 26.2-62 41-99.1 41-37.4 0-72.6-14.6-99.1-41-3.2-3.2-6.3-6.6-9.2-10.1l23.1-17.9c5.3-4.1 3.5-12.5-3-14.1l-93.3-22.5c-5-1.2-9.8 2.6-9.9 7.7l-0.6 95.4c0 6.7 7.6 10.5 12.9 6.4l20.3-15.8C562.6 918.4 619.9 948 684 948c109.9 0 199.6-86.9 204-195.7 0.2-4.5-3.5-8.3-8-8.3z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconFilesync.defaultProps = {
  size: 18,
};

IconFilesync = React.memo ? React.memo(IconFilesync) : IconFilesync;

export default IconFilesync;
