import React from 'react';

import { States } from '../../utilities/States';
import { TextInput } from './TextInput';

export default { title: 'Components|TextInput' };

export const Default = () => (
  <States
    states={[
      null,
      { focus: true },
      { disabled: true },
      { defaultValue: 'With value' },
      { error: 'Error', defaultValue: 'With value' }
    ]}
  >
    <TextInput placeholder='An input' />
  </States>
);
