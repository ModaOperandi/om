import React from 'react';
import { shallow } from 'enzyme';

import { Field } from './Field';
import { Select } from '../Select';

describe('Field', () => {
  it('renders correctly', () => {
    const component = shallow(<Field placeholder='Placeholder' defaultValue='Hello' />);

    expect(component.html()).toEqual(
      '<label class="Field"><span class="Field__context"><input class="TextInput" placeholder="Placeholder" aria-label="Placeholder" value="Hello"/></span></label>'
    );
  });

  it('renders with a label', () => {
    const component = shallow(
      <Field placeholder='Placeholder' defaultValue='Hello' label='Label' />
    );

    expect(component.html()).toEqual(
      '<label class="Field"><span class="Field__label">Label</span><span class="Field__context"><input class="TextInput" placeholder="Placeholder" aria-label="Label" value="Hello"/></span></label>'
    );
  });

  it('renders with an error', () => {
    const component = shallow(
      <Field placeholder='Placeholder' defaultValue='Hello' label='Label' error='Error' />
    );

    expect(component.html()).toEqual(
      '<label class="Field"><span class="Field__label">Label</span><span class="Field__context"><input class="TextInput TextInput--error" placeholder="Placeholder" aria-label="Label" value="Hello"/><span class="Field__icon"></span></span><span class="Field__error">Error</span></label>'
    );
  });

  it('renders with an error when children is <Select/>', () => {
    const options = [
      { value: 'foo', label: 'Foo' },
      { value: 'bar', label: 'Bar' },
      { value: 'baz', label: 'Baz', disabled: true }
    ];

    const component = shallow(
      <Field>
        <Select idRef='1' name='name-1' label='Sort by' options={options} />
      </Field>
    );

    expect(component.html()).toEqual(
      '<label class="Field"><span class="Field__context"><div id="Select--1" class="Select"><input type="hidden" id="1" name="name-1"/><button id="Select__value--1" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="Select__label--1 Select__value--1" type="button" class="Clickable Select__value"><label id="Select__label--1">Sort by</label><span class="Select__icon"></span></button></div></span></label>'
    );
  });

  it('renders with a className', () => {
    const component = shallow(
      <Field className='Custom' placeholder='Placeholder' defaultValue='Hello' label='Label' />
    );

    expect(component.html()).toEqual(
      '<label class="Field Custom"><span class="Field__label">Label</span><span class="Field__context"><input class="TextInput" placeholder="Placeholder" aria-label="Label" value="Hello"/></span></label>'
    );
  });

  it('supports custom children', () => {
    const component = shallow(
      <Field placeholder='Placeholder' defaultValue='Hello' label='Label'>
        <textarea />
      </Field>
    );

    expect(component.html()).toEqual(
      '<label class="Field"><span class="Field__label">Label</span><span class="Field__context"><textarea placeholder="Placeholder" label="Label">Hello</textarea></span></label>'
    );
  });
});
