import React from 'react';
import { ShapeProps } from './Shape';

export const Oval: React.FC<ShapeProps> = props => (
  <svg
    style={{ fill: 'currentcolor' }}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 110 210'
    {...props}
  >
    <path d='M110 105C110 47.01 85.376 0 55 0S0 47.01 0 105s24.624 105 55 105 55-47.01 55-105z' />
  </svg>
);
