import React from 'react';
import { action } from '@storybook/addon-actions';
import { States } from 'storybook-states';
import { ControlLink, ControlLinkProps } from './ControlLink';

export default { title: 'Components|ControlLink' };

const states = [
  { color: 'cement' as 'cement' },
  { color: 'ink' as 'ink' },
  { color: 'cement' as 'cement', disabled: true },
  { color: 'ink' as 'ink', disabled: true }
];

export const Underlined = () => (
  <States<ControlLinkProps> states={states}>
    <ControlLink onClick={action('onClick')} underlined>
      Underlined Control Link
    </ControlLink>
  </States>
);

export const Blank = () => (
  <States<ControlLinkProps> states={states}>
    <ControlLink onClick={action('onClick')}>Blank Control Link</ControlLink>
  </States>
);
