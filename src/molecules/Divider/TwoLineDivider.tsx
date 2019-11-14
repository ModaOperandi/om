import React from 'react';
import { Divider } from './Divider';

export interface Props {
  text: string;
}

export const TwoLineDivider: React.FC<Props> = props => {
  return <Divider {...props} type={'two-line'} />;
};
