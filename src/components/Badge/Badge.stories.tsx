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
      <Badge theme='dark-fuchsia'>25% off with Code FALL-25</Badge>
    </States>

    <States>
      <Badge theme='dark-fuchsia'>30% off with Code TREAT30</Badge>
    </States>
  </>
);

export const CustomChildren = () => (
  <States>
    <Badge>Exclusive</Badge>
  </States>
);
