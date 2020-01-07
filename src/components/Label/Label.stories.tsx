import React from 'react';

import { States } from '../../utilities/States';
import { Label } from './Label';

export default { title: 'Components|Label' };

export const Default = () => (
  <States states={[{}, { hidden: true }]}>
    <Label>A label describes an input</Label>
  </States>
);
