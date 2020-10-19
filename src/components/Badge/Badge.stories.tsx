import React from 'react';
import { States } from 'storybook-states';

import { Badge, BadgeProps } from './Badge';

export default { title: 'Components/Badge' };

export const Themes = () => (
  <States<BadgeProps>
    states={[{ theme: 'bestseller' }, { theme: 'trending' }, { theme: 'fall-essential' }]}
  >
    <Badge theme='bestseller' />
  </States>
);

export const CustomChildren = () => (
  <States<BadgeProps>>
    <Badge>Exclusive</Badge>
  </States>
);
