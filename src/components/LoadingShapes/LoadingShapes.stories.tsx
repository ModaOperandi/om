import React from 'react';
import { States } from 'storybook-states';
import { LoadingShapes } from './LoadingShapes';

export default { title: 'Components/LoadingShapes' };

export const Default = () => (
  <States>
    <LoadingShapes />
  </States>
);
