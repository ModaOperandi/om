import React from 'react';
import { ShapeProps } from './Shape';

export const LoadingTriangle: React.FC<ShapeProps> = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path fillRule='evenodd' clipRule='evenodd' d='M11.9986 0L0 24H24L11.9986 0Z' fill='#D56B27' />
  </svg>
);
