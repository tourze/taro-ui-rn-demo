/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconYuanCircleFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m166.6 246.8L567.5 515.6h62c4.4 0 8 3.6 8 8v29.9c0 4.4-3.6 8-8 8h-82V603h82c4.4 0 8 3.6 8 8v29.9c0 4.4-3.6 8-8 8h-82V717c0 4.4-3.6 8-8 8h-54.3c-4.4 0-8-3.6-8-8v-68.1h-81.7c-4.4 0-8-3.6-8-8V611c0-4.4 3.6-8 8-8h81.7v-41.5h-81.7c-4.4 0-8-3.6-8-8v-29.9c0-4.4 3.6-8 8-8h61.4L345.4 310.8c-2.1-3.9-0.7-8.7 3.2-10.9 1.2-0.6 2.5-1 3.8-1h60.7c3 0 5.8 1.7 7.1 4.4l90.6 180h3.4l90.6-180c1.4-2.7 4.1-4.4 7.1-4.4h59.5c4.4 0 8 3.6 8 8 0.2 1.4-0.2 2.7-0.8 3.9z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconYuanCircleFill.defaultProps = {
  size: 18,
};

IconYuanCircleFill = React.memo ? React.memo(IconYuanCircleFill) : IconYuanCircleFill;

export default IconYuanCircleFill;
