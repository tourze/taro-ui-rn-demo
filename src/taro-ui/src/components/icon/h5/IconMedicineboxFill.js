/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconMedicineboxFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M839.2 278.1c-4.3-13.2-16.6-22.1-30.4-22.1H736V144c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v112h-72.8c-13.9 0-26.1 8.9-30.4 22.1L112 502v378c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V502l-72.8-223.9zM660 628c0 4.4-3.6 8-8 8H544v108c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V636H372c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h108V464c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v108h108c4.4 0 8 3.6 8 8v48z m4-372H360v-72h304v72z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconMedicineboxFill.defaultProps = {
  size: 18,
};

export default IconMedicineboxFill;
