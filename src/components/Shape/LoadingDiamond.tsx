import React from 'react';
import { ShapeProps } from './Shape';

export const LoadingDiamond: React.FC<ShapeProps> = () => (
  <svg
    className='LoadingDiamond'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 24.0026L0 12.0026L12 0L24 12.0026L12 24.0026Z'
      fill='#C44CB0'
    />
  </svg>
);
