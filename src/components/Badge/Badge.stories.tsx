import React from 'react';

import { Badge } from './Badge';
import { States } from '../../utilities/States';

export default { title: 'Components|Badge' };

export const Themes = () => (
  <States states={[{ theme: 'bestseller' }, { theme: 'trending' }, { theme: 'fall-essential' }]}>
    <Badge theme='bestseller' />
  </States>
);

export const CustomChildren = () => (
  <States states={[{}]}>
    <Badge>Exclusive</Badge>
  </States>
);
