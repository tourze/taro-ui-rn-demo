/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconSwitchuser = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M759 335c0-137-111-248-248-248S263 198 263 335c0 82.8 40.6 156.2 103 201.2-0.4 0.2-0.7 0.3-0.9 0.4-44.7 18.9-84.8 46-119.3 80.6-34.5 34.5-61.5 74.7-80.4 119.5C146.9 780.5 137 827 136 874.8c-0.1 4.5 3.5 8.2 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C356 614.2 431 583 511 583c137 0 248-111 248-248zM511 507c-95 0-172-77-172-172s77-172 172-172 172 77 172 172-77 172-172 172zM616 728h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H703.5l47.2-60.1c1.1-1.4 1.7-3.2 1.7-4.9 0-4.4-3.6-8-8-8h-72.6c-4.9 0-9.5 2.3-12.6 6.1l-68.5 87.1c-4.4 5.6-6.8 12.6-6.8 19.8 0.1 17.7 14.4 32 32.1 32zM856 792H592c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h176.5l-47.2 60.1c-1.1 1.4-1.7 3.2-1.7 4.9 0 4.4 3.6 8 8 8h72.6c4.9 0 9.5-2.3 12.6-6.1l68.5-87.1c4.4-5.6 6.8-12.6 6.8-19.8-0.1-17.7-14.4-32-32.1-32z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconSwitchuser.defaultProps = {
  size: 18,
};

export default IconSwitchuser;
