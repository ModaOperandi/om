import React from 'react';
import wait from 'waait';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Select } from './Select';

describe('Select', () => {
  const options = [
    { value: 'foo', label: 'Foo' },
    { value: 'bar', label: 'Bar' },
    { value: 'baz', label: 'Baz', disabled: true }
  ];

  it('renders correctly', () => {
    const { container } = render(
      <Select idRef='1' name='name-1' label='Sort by' options={options} />
    );
    expect(container.innerHTML).toEqual(
      '<div id="Select--1" class="Select"><input id="1" name="name-1" type="hidden" value=""><button id="Select__value--1" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="Select__label--1 Select__value--1" type="button" title="Select" class="Clickable Select__value"><label id="Select__label--1">Sort by</label><span class="Select__icon"></span></button></div>'
    );
  });

  it('expands when clicked', () => {
    const { container } = render(
      <Select idRef='1' name='name-1' label='Sort by' options={options} />
    );
    const button = container.querySelector('#Select__value--1')!;
    userEvent.click(button);
    expect(container.innerHTML).toEqual(
      '<div id="Select--1" class="Select"><input id="1" name="name-1" type="hidden" value=""><button id="Select__value--1" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="Select__label--1 Select__value--1" type="button" title="Select" class="Clickable Select__value"><label id="Select__label--1">Sort by</label><span class="Select__icon"></span></button><ul class="SelectOptions Select__options" tabindex="-1" role="listbox" aria-labelledby="Select__label--1" aria-activedescendant="SelectOption--foo-1"><li class="SelectOption SelectOption--active" aria-label="Foo" aria-selected="false" role="option">Foo</li><li class="SelectOption" aria-label="Bar" aria-selected="false" role="option">Bar</li><li class="SelectOption SelectOption--disabled" aria-label="Baz" aria-selected="false" role="option">Baz</li></ul></div>'
    );
  });

  it('does not expand on click when disabled', () => {
    const { container } = render(
      <Select
        defaultValue={undefined}
        disabled
        idRef='1'
        name='name-1'
        label='Sort by'
        options={options}
      />
    );
    const button = container.querySelector('#Select__value--1')!;
    userEvent.click(button);
    expect(container.innerHTML).toEqual(
      '<div id="Select--1" class="Select Select--disabled"><input id="1" name="name-1" type="hidden" value=""><button id="Select__value--1" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="Select__label--1 Select__value--1" type="button" title="Select" class="Clickable Clickable--disabled Select__value" disabled=""><label id="Select__label--1">Sort by</label><span class="Select__icon"></span></button></div>'
    );
  });

  it('calls onChange when selecting an option', async () => {
    const onChange = jest.fn();
    const { container } = render(
      <Select
        defaultValue={undefined}
        idRef='1'
        label='Sort by'
        name='name-1'
        options={options}
        onChange={onChange}
      />
    );
    const button = container.querySelector('#Select__value--1')!;
    userEvent.click(button);
    const option = screen.getByLabelText('Bar');
    userEvent.click(option);
    await wait(0);
    expect(onChange).toBeCalledWith('bar');
  });

  it('does not call onChange when selecting a disabled option', async () => {
    const onChange = jest.fn();
    const { container } = render(
      <Select
        defaultValue={undefined}
        idRef='1'
        label='Sort by'
        name='name-1'
        options={options}
        onChange={onChange}
      />
    );
    const button = container.querySelector('#Select__value--1')!;
    userEvent.click(button);
    const option = screen.getByLabelText('Baz');
    userEvent.click(option);
    await wait(0);
    expect(onChange).not.toBeCalled();
  });

  it('renders correctly with ":" between label and value if value is not undefined', async () => {
    const { container } = render(
      <Select idRef='1' name='name-1' label='Sort by' options={options} />
    );
    const button = container.querySelector('#Select__value--1')!;
    userEvent.click(button);
    const option = screen.getByLabelText('Bar');
    userEvent.click(option);
    await wait(0);
    expect(container.innerHTML).toEqual(
      '<div id="Select--1" class="Select"><input id="1" name="name-1" type="hidden" value="bar"><button id="Select__value--1" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="Select__label--1 Select__value--1" type="button" title="Select" class="Clickable Select__value"><label id="Select__label--1">Sort by: </label>Bar<span class="Select__icon"></span></button></div>'
    );
  });

  it('renders correctly when there is no label', async () => {
    const { container } = render(<Select idRef='1' name='name-1' options={options} />);
    const button = container.querySelector('#Select__value--1')!;
    userEvent.click(button);
    const option = screen.getByLabelText('Bar');
    userEvent.click(option);
    await wait(0);
    expect(container.innerHTML).toEqual(
      '<div id="Select--1" class="Select"><input id="1" name="name-1" type="hidden" value="bar"><button id="Select__value--1" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="Select__label--1 Select__value--1" type="button" title="Select" class="Clickable Select__value">Bar<span class="Select__icon"></span></button></div>'
    );
  });
});
