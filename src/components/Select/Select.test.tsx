import React from 'react';
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
      '<div id="Select--1" class="Select"><input id="1" type="hidden" value="" name="name-1"><button id="Select__value--1" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="Select__label--1" type="button" class="Clickable Select__value"><span id="Select__label--1" class="Select__label">Sort by</span><span id="Select__valueText--1"></span><span class="Select__icon"></span></button></div>'
    );
  });

  it('expands when clicked', async () => {
    const { container } = render(
      <Select idRef='1' name='name-1' label='Sort by' options={options} />
    );
    const button = screen.getByRole('button', { name: /Sort by/ });
    await userEvent.click(button);
    expect(container.innerHTML).toEqual(
      '<div id="Select--1" class="Select"><input id="1" type="hidden" value="" name="name-1"><button id="Select__value--1" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="Select__label--1" type="button" class="Clickable Select__value" aria-controls="Select__listbox--1"><span id="Select__label--1" class="Select__label">Sort by</span><span id="Select__valueText--1"></span><span class="Select__icon"></span></button><div class="SelectOptions Select__options Select__options--down"><ul id="Select__listbox--1" class="SelectOptions__list" tabindex="-1" role="listbox" aria-label="Options" aria-activedescendant="SelectOption--foo-1"><li id="SelectOption--foo-1" class="SelectOption SelectOption--active" aria-selected="false" role="option">Foo</li><li id="SelectOption--bar-1" class="SelectOption" aria-selected="false" role="option">Bar</li><li id="SelectOption--baz-1" class="SelectOption SelectOption--disabled" aria-selected="false" aria-disabled="true" role="option">Baz</li></ul></div></div>'
    );
  });

  it('does not expand on click when disabled', async () => {
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
    const button = screen.getByRole('button', { name: /Sort by/ });
    await userEvent.click(button);
    expect(container.innerHTML).toEqual(
      '<div id="Select--1" class="Select Select--disabled"><input id="1" type="hidden" value="" name="name-1"><button id="Select__value--1" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="Select__label--1" type="button" class="Clickable Clickable--disabled Select__value" disabled=""><span id="Select__label--1" class="Select__label">Sort by</span><span id="Select__valueText--1"></span><span class="Select__icon"></span></button></div>'
    );
  });

  it('calls onChange when selecting an option', async () => {
    const onChange = jest.fn();
    render(
      <Select
        defaultValue={undefined}
        idRef='1'
        label='Sort by'
        name='name-1'
        options={options}
        onChange={onChange}
      />
    );
    const button = screen.getByRole('button', { name: /Sort by/ });
    await userEvent.click(button);
    const option = screen.getByRole('option', { name: 'Bar' });
    await userEvent.click(option);
    expect(onChange).toHaveBeenCalledWith('bar');
  });

  it('does not call onChange when selecting a disabled option', async () => {
    const onChange = jest.fn();
    render(
      <Select
        defaultValue={undefined}
        idRef='1'
        label='Sort by'
        name='name-1'
        options={options}
        onChange={onChange}
      />
    );
    const button = screen.getByRole('button', { name: /Sort by/ });
    await userEvent.click(button);
    const option = screen.getByRole('option', { name: 'Baz' });
    await userEvent.click(option);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('renders correctly with ":" between label and value if value is not undefined', async () => {
    const { container } = render(
      <Select idRef='1' name='name-1' label='Sort by' options={options} />
    );
    const button = screen.getByRole('button', { name: /Sort by/ });
    await userEvent.click(button);
    const option = screen.getByRole('option', { name: 'Bar' });
    await userEvent.click(option);
    expect(container.innerHTML).toEqual(
      '<div id="Select--1" class="Select"><input id="1" type="hidden" value="bar" name="name-1"><button id="Select__value--1" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="Select__label--1 Select__valueText--1" type="button" class="Clickable Select__value"><span id="Select__label--1" class="Select__label">Sort by: </span><span id="Select__valueText--1">Bar</span><span class="Select__icon"></span></button></div>'
    );
  });

  it('closes dropdown and returns focus to button when Escape is pressed', async () => {
    render(<Select idRef='1' name='name-1' label='Sort by' options={options} />);
    const button = screen.getByRole('button', { name: /Sort by/ });
    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    await userEvent.keyboard('{Escape}');

    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(button).toHaveFocus();
  });

  it('renders correctly when there is no label', async () => {
    const { container } = render(<Select idRef='1' name='name-1' options={options} />);
    const button = screen.getByRole('button', { name: 'Select an option' });
    await userEvent.click(button);
    const option = screen.getByRole('option', { name: 'Bar' });
    await userEvent.click(option);
    expect(container.innerHTML).toEqual(
      '<div id="Select--1" class="Select"><input id="1" type="hidden" value="bar" name="name-1"><button id="Select__value--1" aria-haspopup="listbox" aria-expanded="false" aria-label="Select an option" type="button" class="Clickable Select__value"><span id="Select__valueText--1">Bar</span><span class="Select__icon"></span></button></div>'
    );
  });
});
