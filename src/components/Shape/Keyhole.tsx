import React from 'react';
import { ShapeProps } from './Shape';

export const Keyhole: React.FC<ShapeProps> = (props) => (
  <svg
    style={{ fill: 'currentcolor' }}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 111 210'
    {...props}
  >
    <path d='M.8 210h110V86.403h-9.317c5.88-8.833 9.317-19.46 9.317-30.902C110.8 24.85 86.175 0 55.8 0S.8 24.85.8 55.501c0 11.441 3.436 22.069 9.315 30.902H.8V210z' />
  </svg>
);
