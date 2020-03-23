import React from 'react';
import { ShapeProps } from './Shape';

export const Bradley: React.FC<ShapeProps> = (props) => (
  <svg
    style={{ fill: 'currentcolor' }}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 110 211'
    {...props}
  >
    <path d='M110 .336H0v210h45.11v-52.595h19.78v52.595H110V105.147z' />
  </svg>
);
