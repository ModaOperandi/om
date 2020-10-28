import React from 'react';
import { States } from 'storybook-states';

import { Badge } from './Badge';

export default { title: 'Components/Badge' };

export const Themes = () => (
  <>
    <States>
      <Badge theme='bestseller'>BESTSELLER</Badge>
    </States>

    <States>
      <Badge theme='trending'>TRENDING</Badge>
    </States>

    <States>
      <Badge theme='fall-essential'>Fall Essential</Badge>
    </States>

    <States>
      <Badge theme='fall-25'>25% off with Code FALL-25</Badge>
    </States>
  </>
);

export const CustomChildren = () => (
  <States>
    <Badge>Exclusive</Badge>
  </States>
);
