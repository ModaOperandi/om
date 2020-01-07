import React from 'react';
import { shallow } from 'enzyme';

import { Field } from './Field';

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
      '<label class="Field"><span class="Field__label">Label</span><span class="Field__context"><input class="TextInput" placeholder="Placeholder" aria-label="Placeholder" value="Hello"/></span></label>'
    );
  });

  it('renders with an error', () => {
    const component = shallow(
      <Field placeholder='Placeholder' defaultValue='Hello' label='Label' error='Error' />
    );

    expect(component.html()).toEqual(
      '<label class="Field"><span class="Field__label">Label</span><span class="Field__context"><input class="TextInput TextInput--error" placeholder="Placeholder" aria-label="Placeholder" value="Hello"/><span class="Field__icon"></span></span><span class="Field__error">Error</span></label>'
    );
  });

  it('renders with a className', () => {
    const component = shallow(
      <Field className='Custom' placeholder='Placeholder' defaultValue='Hello' label='Label' />
    );

    expect(component.html()).toEqual(
      '<label class="Field Custom"><span class="Field__label">Label</span><span class="Field__context"><input class="TextInput" placeholder="Placeholder" aria-label="Placeholder" value="Hello"/></span></label>'
    );
  });
});
