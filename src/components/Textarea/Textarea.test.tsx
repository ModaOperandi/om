import React from 'react';
import { shallow } from 'enzyme';

import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders correctly', () => {
    const component = shallow(<Textarea placeholder='Placeholder' defaultValue='Hello' />);

    expect(component.html()).toEqual(
      '<textarea class="Textarea" placeholder="Placeholder" aria-label="Placeholder">Hello</textarea>'
    );
  });

  it('renders with an error', () => {
    const component = shallow(
      <Textarea placeholder='Placeholder' defaultValue='Hello' label='Label' error='Error' />
    );

    expect(component.html()).toEqual(
      '<textarea class="Textarea Textarea--error" placeholder="Placeholder" aria-label="Label">Hello</textarea>'
    );
  });

  it('renders with a className', () => {
    const component = shallow(
      <Textarea className='Custom' placeholder='Placeholder' defaultValue='Hello' label='Label' />
    );

    expect(component.html()).toEqual(
      '<textarea class="Textarea Custom" placeholder="Placeholder" aria-label="Label">Hello</textarea>'
    );
  });
});
