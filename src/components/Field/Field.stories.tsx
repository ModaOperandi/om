import React from 'react';
import { States } from 'storybook-states';
import { Field, FieldProps } from './Field';
import { Textarea } from '../Textarea';

export default { title: 'Components|Field' };

export const Default = () => (
  <States<FieldProps>
    states={[
      {},
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
  <States<FieldProps>
    states={[
      {},
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
