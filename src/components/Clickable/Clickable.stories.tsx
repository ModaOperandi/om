import React from 'react';
import { action } from '@storybook/addon-actions';
import { States } from 'storybook-states';
import { Clickable, ClickableProps } from './Clickable';

export default { title: 'Components|Clickable' };

export const Default = () => (
  <States<ClickableProps>>
    <Clickable onClick={action('onClick')}>
      Useful to extend in place of &lt;button&gt;. Click me.
    </Clickable>
  </States>
);
