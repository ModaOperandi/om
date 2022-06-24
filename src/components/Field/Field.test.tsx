import React from 'react';
import { render, screen } from '@testing-library/react';

import { Select } from '../Select';
import { Field } from './Field';

describe('Field', () => {
  it('renders correctly', () => {
    render(<Field placeholder='Placeholder' defaultValue='Hello' />);

    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Placeholder');
  });

  it('renders with a label', () => {
    render(<Field placeholder='Placeholder' defaultValue='Hello' label='Label' />);

    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Placeholder');
    expect(screen.getByText('Label')).toBeVisible();
  });

  it('renders with an error', () => {
    render(<Field placeholder='Placeholder' defaultValue='Hello' label='Label' error='Error' />);

    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByRole('textbox')).toHaveClass('TextInput--error');
    expect(screen.getByText('Error')).toBeVisible();
  });

  it('renders with <Select/> child', () => {
    const options = [
      { value: 'foo', label: 'Foo' },
      { value: 'bar', label: 'Bar' },
      { value: 'baz', label: 'Baz', disabled: true }
    ];

    render(
      <Field>
        <Select idRef='1' name='name-1' label='Sort by' options={options} />
      </Field>
    );

    expect(screen.getByRole('button', { name: /Sort by/ })).toBeVisible();
  });

  it('renders with a className', () => {
    render(
      <Field className='Custom' placeholder='Placeholder' defaultValue='Hello' label='Label' />
    );

    expect(screen.getByRole('textbox')).toBeVisible();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByRole('textbox').parentNode?.parentNode).toHaveClass('Custom');
  });

  it('supports custom children', () => {
    render(
      <Field placeholder='Placeholder' defaultValue='Hello' label='Label'>
        <textarea />
      </Field>
    );

    expect(screen.getByRole('textbox')).toBeVisible();
  });
});
