/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconBankFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 0 0-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM381 836H264V462h117v374z m189 0H453V462h117v374z m190 0H642V462h118v374z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBankFill.defaultProps = {
  size: 18,
};

IconBankFill = React.memo ? React.memo(IconBankFill) : IconBankFill;

export default IconBankFill;
