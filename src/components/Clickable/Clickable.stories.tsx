import React from 'react';
import { action } from '@storybook/addon-actions';
import { States } from 'storybook-states';
import { Clickable, ClickableProps } from './Clickable';

export default { title: 'Components/Clickable' };

export const Button = () => (
  <States<ClickableProps>>
    <Clickable onClick={action('onClick')}>
      Useful to extend in place of &lt;button/&gt;. Click me.
    </Clickable>
  </States>
);

export const Anchor = () => (
  <States<ClickableProps>>
    <Clickable href='#'>Useful to extend in place of &lt;a/&gt;. Click me.</Clickable>
  </States>
);

export const Link = () => (
  <States<ClickableProps>>
    <Clickable to='#href'>Useful to extend in place of &lt;Link/&gt;. Click me.</Clickable>
  </States>
);
