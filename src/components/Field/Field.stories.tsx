import React from 'react';

import { States } from '../../utilities/States';
import { Field } from './Field';
import { Textarea } from '../Textarea';

export default { title: 'Components|Field' };

export const Default = () => (
  <States
    states={[
      null,
      { focus: true },
      { disabled: true },
      { defaultValue: 'With value' },
      { error: 'Something is wrong', defaultValue: 'With value' },
      { label: 'Name of input' },
      { label: 'Name of input', error: 'Something went wrong' }
    ]}
  >
    <Field placeholder='An input' />
  </States>
);

export const AribitraryChildren = () => (
  <States
    states={[
      null,
      { focus: true },
      { disabled: true },
      { defaultValue: 'With value' },
      { error: 'Something is wrong', defaultValue: 'With value' },
      { label: 'Name of input' },
      { label: 'Name of input', error: 'Something went wrong' }
    ]}
  >
    <Field>
      <Textarea placeholder='A textarea' />
    </Field>
  </States>
);
