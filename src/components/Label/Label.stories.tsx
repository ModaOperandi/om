import React from 'react';
import { States } from 'storybook-states';
import { Label, LabelProps } from './Label';

export default { title: 'Components/Label' };

export const Default = () => (
  <States<LabelProps> states={[{}, { hidden: true }]}>
    <Label>A label describes an input</Label>
  </States>
);
