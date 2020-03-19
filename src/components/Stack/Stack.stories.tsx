import React from 'react';
import { States } from 'storybook-states';
import { space } from '@moda/tokens';
import { Stack, StackProps } from './Stack';

export default { title: 'Components|Stack' };

export const Vertical = () => (
  <States<StackProps> states={space.scale.map((_, i) => ({ space: i, direction: 'vertical' }))}>
    <Stack space={0}>
      <div style={{ backgroundColor: 'yellow' }}>One</div>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
      <div style={{ backgroundColor: 'yellow' }}>Three</div>
    </Stack>
  </States>
);

export const Horizontal = () => (
  <States<StackProps> states={space.scale.map((_, i) => ({ space: i, direction: 'horizontal' }))}>
    <Stack space={0}>
      <div style={{ backgroundColor: 'yellow' }}>One</div>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
      <div style={{ backgroundColor: 'yellow' }}>Three</div>
    </Stack>
  </States>
);
