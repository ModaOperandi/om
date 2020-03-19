import React from 'react';
import { Divider, DividerProps } from './Divider';

export const NoLineDivider: React.FC<DividerProps> = props => {
  return <Divider {...props} type={'no-line'} />;
};
