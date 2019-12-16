import React from 'react';
import { shallow } from 'enzyme';

import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    const component = shallow(<Input placeholder='Placeholder' defaultValue='Hello' />);

    expect(component.html()).toEqual(
      '<label class="Input"><input class="Input__input" placeholder="Placeholder" value="Hello"/><span class="Input__label Input__label--hidden">Placeholder</span></label>'
    );
  });

  it('renders with a label', () => {
    const component = shallow(
      <Input placeholder='Placeholder' defaultValue='Hello' label='Label' />
    );

    expect(component.html()).toEqual(
      '<label class="Input"><input class="Input__input" placeholder="Placeholder" value="Hello"/><span class="Input__label">Label</span></label>'
    );
  });

  it('renders with an error', () => {
    const component = shallow(
      <Input placeholder='Placeholder' defaultValue='Hello' label='Label' error='Error' />
    );

    expect(component.html()).toEqual(
      '<label class="Input"><input class="Input__input Input__input--error" placeholder="Placeholder" value="Hello"/><span class="Input__label Input__label--error">Error</span></label>'
    );
  });

  it('renders with a className', () => {
    const component = shallow(
      <Input className='Custom' placeholder='Placeholder' defaultValue='Hello' label='Label' />
    );

    expect(component.html()).toEqual(
      '<label class="Input Custom"><input class="Input__input" placeholder="Placeholder" value="Hello"/><span class="Input__label">Label</span></label>'
    );
  });
});
