import React from 'react';
import { ShapeProps } from './Shape';

export const LoadingCircle: React.FC<ShapeProps> = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M24 12C24 18.6282 18.6282 24 12 24C5.37184 24 0 18.6282 0 12C0 5.37184 5.37184 0 12 0C18.6282 0 24 5.37184 24 12Z'
      fill='#D7B3D0'
    />
  </svg>
);
