/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconRadiusSetting = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M396 140h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM352 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM876 620h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 344h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 504h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 664h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM192 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM512 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM672 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM812 540c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V370c0-127-103-230-230-230H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h170c87.3 0 158 70.7 158 158v170z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M236 96H92c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8z m-48 101.6c0 1.3-1.1 2.4-2.4 2.4h-43.2c-1.3 0-2.4-1.1-2.4-2.4v-43.2c0-1.3 1.1-2.4 2.4-2.4h43.2c1.3 0 2.4 1.1 2.4 2.4v43.2zM920 780H776c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V788c0-4.4-3.6-8-8-8z m-48 101.6c0 1.3-1.1 2.4-2.4 2.4h-43.2c-1.3 0-2.4-1.1-2.4-2.4v-43.2c0-1.3 1.1-2.4 2.4-2.4h43.2c1.3 0 2.4 1.1 2.4 2.4v43.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconRadiusSetting.defaultProps = {
  size: 18,
};

IconRadiusSetting = React.memo ? React.memo(IconRadiusSetting) : IconRadiusSetting;

export default IconRadiusSetting;
