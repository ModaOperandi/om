import React from 'react';
import { Divider, DividerProps } from './Divider';

export const TwoLineDivider: React.FC<DividerProps> = props => {
  return <Divider {...props} type={'two-line'} />;
};
