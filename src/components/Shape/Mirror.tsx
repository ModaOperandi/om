import React from 'react';
import { ShapeProps } from './Shape';

export const Mirror: React.FC<ShapeProps> = props => (
  <svg
    style={{ fill: 'currentcolor' }}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 111 210'
    {...props}
  >
    <path d='M110.03 105c0-22.7-3.786-43.7-10.2-60.874V15.97H84.176C75.724 5.862 65.739 0 55.03 0 44.323 0 34.336 5.862 25.885 15.969H10.23v28.157C3.817 61.3.03 82.3.03 105c0 22.7 3.787 43.7 10.2 60.874v28.157h15.655C34.336 204.138 44.323 210 55.03 210c10.708 0 20.693-5.862 29.146-15.969h15.652v-28.157C106.244 148.7 110.03 127.7 110.03 105z' />
  </svg>
);
