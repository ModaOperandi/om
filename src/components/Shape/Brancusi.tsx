import React from 'react';
import { ShapeProps } from './Shape';

export const Brancusi: React.FC<ShapeProps> = (props) => (
  <svg
    style={{ fill: 'currentcolor' }}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 111 210'
    {...props}
  >
    <path d='M110.575 210l-27.5-105 27.5-105h-110l27.501 105L.575 210z' />
  </svg>
);
