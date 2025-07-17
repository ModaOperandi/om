import React from 'react';
import { action } from 'storybook/actions';
import { BrowserRouter } from 'react-router-dom';
import { States } from '../../utilities';
import { ControlLink, ControlLinkProps } from './ControlLink';

export default { title: 'Components/ControlLink' };

const states = [
  {},
  { disabled: true },
  { onClick: action('onClick') },
  { to: '#href' },
  { href: '#href' }
];

export const Underlined = () => (
  <BrowserRouter>
    <States<ControlLinkProps> states={states}>
      <ControlLink>Underlined Control Link</ControlLink>
    </States>
  </BrowserRouter>
);

export const Blank = () => (
  <BrowserRouter>
    <States<ControlLinkProps> states={states}>
      <ControlLink underlined={false}>Blank Control Link</ControlLink>
    </States>
  </BrowserRouter>
);
