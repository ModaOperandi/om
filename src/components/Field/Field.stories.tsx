import React, { useState } from 'react';
import { action } from 'storybook/actions';
import { States } from '../../utilities';
import { Textarea } from '../Textarea';
import { Select } from '../Select';
import { Field, FieldProps } from './Field';

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
        { value: 'high' },
        { label: 'Sort — ' },
        { disabled: true, label: 'Sort' },
        { label: '' },
        { label: '', error: 'Error' }
      ]}
    >
      <Field>
        <Select options={OPTIONS} onChange={action('onChange')} />
      </Field>
    </States>
  );
};

export const AccessibilityErrorState = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '300px' }}>
    <Field
      label='Email address'
      placeholder='Enter your email'
      error='Please enter a valid email address'
      defaultValue='invalid-email'
    />
    <p style={{ fontSize: '12px', color: '#666' }}>
      Inspect the input to see: aria-invalid=&quot;true&quot;, aria-describedby linking to the
      error, and role=&quot;alert&quot; on the error message for screen reader announcements.
    </p>
  </div>
);

export const AccessibilityDynamicValidation = () => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const error =
    touched && value && !isValidEmail(value) ? 'Please enter a valid email address' : undefined;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '300px' }}>
      <Field
        label='Email address'
        placeholder='Enter your email'
        error={error}
        value={value}
        onChange={setValue}
        onBlur={() => setTouched(true)}
      />
      <p style={{ fontSize: '12px', color: '#666' }}>
        Type an invalid email and blur the field. Screen readers will announce the error via
        role=&quot;alert&quot; when it appears.
      </p>
    </div>
  );
};
