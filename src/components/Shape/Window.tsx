import React from 'react';
import { ShapeProps } from './Shape';

export const Window: React.FC<ShapeProps> = (props) => (
  <svg
    style={{ fill: 'currentcolor' }}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 110 210'
    {...props}
  >
    <path d='M110 187.673V21.948H98.87C88.873 8.64 73.08 0 55.247 0 37.412 0 21.619 8.64 11.622 21.948H0v165.725h11.34C21.32 201.198 37.245 210 55.248 210c18 0 33.924-8.802 43.904-22.327H110z' />
  </svg>
);
