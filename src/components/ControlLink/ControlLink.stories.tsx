import React from 'react';
import { action } from '@storybook/addon-actions';
import { States } from 'storybook-states';
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
  <States<ControlLinkProps> states={states}>
    <ControlLink>Underlined Control Link</ControlLink>
  </States>
);

export const Blank = () => (
  <States<ControlLinkProps> states={states}>
    <ControlLink underlined={false}>Blank Control Link</ControlLink>
  </States>
);
