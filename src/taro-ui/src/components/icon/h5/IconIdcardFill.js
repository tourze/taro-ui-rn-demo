/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconIdcardFill = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M373 411c-28.5 0-51.7 23.3-51.7 52s23.2 52 51.7 52 51.7-23.3 51.7-52-23.2-52-51.7-52z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM608 420c0-4.4 1-8 2.3-8h123.4c1.3 0 2.3 3.6 2.3 8v48c0 4.4-1 8-2.3 8H610.3c-1.3 0-2.3-3.6-2.3-8v-48z m-86 253h-43.9c-4.2 0-7.6-3.3-7.9-7.5-3.8-50.5-46-90.5-97.2-90.5s-93.4 40-97.2 90.5c-0.3 4.2-3.7 7.5-7.9 7.5H224c-4.6 0-8.2-3.8-8-8.4 2.8-53.3 32-99.7 74.6-126.1-18.1-19.9-29.1-46.4-29.1-75.5 0-61.9 49.9-112 111.4-112s111.4 50.1 111.4 112c0 29.1-11 55.5-29.1 75.5 42.7 26.5 71.8 72.8 74.6 126.1 0.4 4.6-3.2 8.4-7.8 8.4z m278.9-53H615.1c-3.9 0-7.1-3.6-7.1-8v-48c0-4.4 3.2-8 7.1-8h185.7c3.9 0 7.1 3.6 7.1 8v48h0.1c0 4.4-3.2 8-7.1 8z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </svg>
  );
};

IconIdcardFill.defaultProps = {
  size: 18,
};

export default IconIdcardFill;
