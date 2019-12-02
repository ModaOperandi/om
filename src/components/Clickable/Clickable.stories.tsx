import React from 'react';
import { action } from '@storybook/addon-actions';

import { Clickable } from './Clickable';

export default { title: 'Components|Clickable' };

export const Default = () => (
  <Clickable onClick={action('onClick')}>
    Useful to extend in place of &lt;button&gt;. Click me.
  </Clickable>
);
