import React from 'react';
import { action } from '@storybook/addon-actions';

import { States } from 'storybook-states';
import { SelectableButton, SelectableButtonProps } from './SelectableButton';
import { Stack } from '../Stack';

export default { title: 'Components|SelectableButton' };

export const Default = () => (
  <States<SelectableButtonProps>
    states={[{}, { hover: true }, { selected: true }, { unavailable: true }]}
  >
    <SelectableButton onClick={action('clicked')}>US 30</SelectableButton>
  </States>
);

export const Stacked = () => (
  <Stack space={2}>
    <SelectableButton onClick={action('clicked')}>Small</SelectableButton>
    <SelectableButton onClick={action('clicked')}>Medium</SelectableButton>
    <SelectableButton unavailable onClick={action('clicked')}>
      Large
    </SelectableButton>
    <SelectableButton onClick={action('clicked')}>Extra-Large</SelectableButton>
  </Stack>
);

Stacked.story = { parameters: { viewport: { defaultViewport: 'xs' } } };

export const Overflowing = () => (
  <SelectableButton onClick={action('clicked')}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, harum fuga? Veniam error sunt sed
    debitis iste similique maxime expedita cumque nam aliquam eius vero, incidunt dolorem. Quis,
    eligendi nam?
  </SelectableButton>
);
