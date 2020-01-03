import React from 'react';

import { States } from '../../utilities/States';
import { Textarea } from './Textarea';

export default { title: 'Components|Textarea' };

export const Default = () => (
  <States
    states={[
      null,
      { focus: true },
      { disabled: true },
      { defaultValue: 'With value' },
      { valid: true },
      { error: 'Error', defaultValue: 'With value' },
      { label: 'Label' }
    ]}
  >
    <Textarea placeholder='A textarea' />
  </States>
);
