/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconContactsFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zM661 736h-43.9c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.6-46-90.5-97.2-90.5s-93.4 40-97.2 90.5c-0.3 4.2-3.7 7.5-7.9 7.5H363c-4.6 0-8.2-3.8-8-8.4 2.8-53.3 32-99.7 74.6-126.1-18.1-19.9-29.1-46.4-29.1-75.5 0-61.9 49.9-112 111.4-112 61.5 0 111.4 50.1 111.4 112 0 29.1-11 55.5-29.1 75.5 42.7 26.5 71.8 72.8 74.6 126.1 0.4 4.6-3.2 8.4-7.8 8.4zM512 474c-28.5 0-51.7 23.3-51.7 52s23.2 52 51.7 52c28.5 0 51.7-23.3 51.7-52s-23.2-52-51.7-52z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconContactsFill.defaultProps = {
  size: 18,
};

IconContactsFill = React.memo ? React.memo(IconContactsFill) : IconContactsFill;

export default IconContactsFill;
