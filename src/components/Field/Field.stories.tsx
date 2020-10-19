import React from 'react';
import { States } from 'storybook-states';
import { Field, FieldProps } from './Field';
import { Textarea } from '../Textarea';
import { Select } from '../Select';
import { action } from '@storybook/addon-actions';

export default { title: 'Components/Field' };

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

export const SelectChildren = () => {
  const OPTIONS = [
    { value: 'featured', label: 'Featured' },
    {
      value: 'recency',
      label: "What's New",
      disabled: true
    },
    {
      value: 'high',
      label: 'Price High to Low'
    },
    {
      value: 'low',
      label: 'Price Low to High'
    }
  ];
  return (
    <States<FieldProps>
      states={[
        {},
        { idRef: '2', value: 'high' },
        { idRef: '3', label: 'Sort — ' },
        { disabled: true, idRef: '4', label: 'Sort' },
        { idRef: '5', label: '' },
        { idRef: '1', label: '', error: 'Error' }
      ]}
    >
      <Field>
        <Select options={OPTIONS} onChange={action('onChange')} />
      </Field>
    </States>
  );
};
