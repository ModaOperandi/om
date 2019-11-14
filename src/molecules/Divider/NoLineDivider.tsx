import React from 'react';
import { Divider } from './Divider';

export interface Props {
  text: string;
}

export const NoLineDivider: React.FC<Props> = props => {
  return <Divider {...props} type={'no-line'} />;
};
