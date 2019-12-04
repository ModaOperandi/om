import React from 'react';

import { States } from '../../utilities/States';
import { Input } from './Input';

export default { title: 'Components|Input' };

export const Default = () => (
  <States
    states={[
      null,
      { focus: true },
      { disabled: true },
      { defaultValue: 'With value' },
      { valid: true },
      { error: true, defaultValue: 'With value' }
    ]}
  >
    <Input placeholder='An input' />
  </States>
);
