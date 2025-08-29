import React from 'react';
import { Divider, DividerProps } from './Divider';

export const LineAboveDivider: React.FC<DividerProps> = props => {
  return <Divider {...props} type='line-above' />;
};
