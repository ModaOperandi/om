import React from 'react';

import { States } from 'storybook-states';
import { VerticalDivider } from './VerticalDivider';
import { Stack } from '../Stack';

export default { title: 'Components|VerticalDivider' };

export const Default = () => (
  <States>
    <Stack direction='horizontal' space={4}>
      <div> Lorem ipsum dolor sit amet</div>

      <VerticalDivider />

      <div> consectetur adipiscing elit.</div>
    </Stack>
  </States>
);

export const Double = () => (
  <States>
    <Stack direction='horizontal' space={4}>
      <div> Lorem ipsum dolor sit amet</div>

      <VerticalDivider double />

      <div> consectetur adipiscing elit.</div>
    </Stack>
  </States>
);
