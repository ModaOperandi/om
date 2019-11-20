import React from 'react';
import { space } from '@moda/tokens';

import { Stack } from './Stack';
import { States } from '../../utilities/States';

export default { title: 'Components|Stack' };

export const Vertical = () => (
  <States states={space.scale.map((_, i) => ({ space: i, direction: 'vertical' }))}>
    <Stack space={0}>
      <div style={{ backgroundColor: 'yellow' }}>One</div>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
      <div style={{ backgroundColor: 'yellow' }}>Three</div>
    </Stack>
  </States>
);

export const Horizontal = () => (
  <States states={space.scale.map((_, i) => ({ space: i, direction: 'horizontal' }))}>
    <Stack space={0}>
      <div style={{ backgroundColor: 'yellow' }}>One</div>
      <div style={{ backgroundColor: 'yellow' }}>Two</div>
      <div style={{ backgroundColor: 'yellow' }}>Three</div>
    </Stack>
  </States>
);
