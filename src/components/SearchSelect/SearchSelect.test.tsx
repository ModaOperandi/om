import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchSelect } from './SearchSelect';

const ANIMAL_OPTIONS = [
  { value: 'dog', label: 'Dog' },
  {
    value: 'cat',
    label: 'Cat'
  },
  {
    value: 'zebra',
    label: 'Zebra'
  },
  {
    value: 'elephant',
    label: 'Elephant'
  }
];

describe('SearchSelect', () => {
  it('Calls onChange when we click an option', () => {
    const onChange = jest.fn();

    const { container } = render(
      <SearchSelect
        idRef='1'
        options={ANIMAL_OPTIONS}
        name='animal'
        value='Animals'
        onChange={onChange}
      />
    );

    userEvent.type(screen.getByLabelText('SearchSelect__input'), 'Elephant');
    const button = container.querySelector('#Select__value--1')!;
    userEvent.click(button);
    userEvent.click(screen.getByLabelText('Elephant'));
    expect(onChange).toBeCalled();
  });
});
