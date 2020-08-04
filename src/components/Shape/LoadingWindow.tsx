import React from 'react';
import { ShapeProps } from './Shape';

export const LoadingWindow: React.FC<ShapeProps> = () => (
  <svg
    className='LoadingWindow'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.1097 24V11.6273V8.8331V8.81993C20.1018 3.96884 16.4806 0 12.0536 0C7.6291 0 4.00527 3.96884 4 8.81993V8.8331V11.6273V24H20.1097Z'
      fill='#003728'
    />
  </svg>
);
