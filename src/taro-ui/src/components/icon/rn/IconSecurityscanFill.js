/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IconSecurityscanFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 0.7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c0.2-8.8-6.6-18.3-14.9-21.2zM626.8 554c-48.5 48.5-123 55.2-178.6 20.1l-77.5 77.5c-3.1 3.1-8.2 3.1-11.3 0l-34-34c-3.1-3.1-3.1-8.2 0-11.3l77.5-77.5c-35.1-55.7-28.4-130.1 20.1-178.6 56.3-56.3 147.5-56.3 203.8 0 56.3 56.3 56.3 147.5 0 203.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M468.25522 508.730514a80.1 80.1 0 1 0 113.27653-113.280484 80.1 80.1 0 1 0-113.27653 113.280484Z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconSecurityscanFill.defaultProps = {
  size: 18,
};

IconSecurityscanFill = React.memo ? React.memo(IconSecurityscanFill) : IconSecurityscanFill;

export default IconSecurityscanFill;
