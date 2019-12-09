import React from 'react';
import { action } from '@storybook/addon-actions';

import { States } from '../../utilities/States';
import { Clickable } from './Clickable';

export default { title: 'Components|Clickable' };

export const Default = () => (
  <States>
    <Clickable onClick={action('onClick')}>
      Useful to extend in place of &lt;button&gt;. Click me.
    </Clickable>
  </States>
);
