/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconFolderAdd = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M484 443.1V528h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H484v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V584h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H540v-84.9c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M880 298.4H521L403.7 186.2c-1.5-1.4-3.5-2.2-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconFolderAdd.defaultProps = {
  size: 18,
};

IconFolderAdd = React.memo ? React.memo(IconFolderAdd) : IconFolderAdd;

export default IconFolderAdd;
