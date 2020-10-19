import React from 'react';
import { States } from 'storybook-states';
import { TextInput, TextInputProps } from './TextInput';

export default { title: 'Components/TextInput' };

export const Default = () => (
  <States<TextInputProps>
    states={[
      {},
      { focus: true },
      { disabled: true },
      { defaultValue: 'With value' },
      { error: 'Error', defaultValue: 'With value' }
    ]}
  >
    <TextInput placeholder='An input' />
  </States>
);
