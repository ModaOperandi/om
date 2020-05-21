import React from 'react';
import { action } from '@storybook/addon-actions';
import { States } from 'storybook-states';
import { Clickable, ClickableProps } from './Clickable';
import { BrowserRouter } from 'react-router-dom';

export default { title: 'Components|Clickable' };

const states = [{ onClick: action('onClick') }, { href: '#href' }, { to: '#href' }];

export const Default = () => (
  <BrowserRouter>
    <States<ClickableProps> states={states}>
      <Clickable>Useful to extend in place of &lt;button&gt;. Click me.</Clickable>
    </States>
  </BrowserRouter>
);
