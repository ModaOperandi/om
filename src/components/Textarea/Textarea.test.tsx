import React from 'react';
import { shallow } from 'enzyme';

import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders correctly', () => {
    const component = shallow(<Textarea placeholder='Placeholder' defaultValue='Hello' />);

    expect(component.html()).toEqual(
      '<label class="Textarea"><textarea class="Textarea__textarea" placeholder="Placeholder">Hello</textarea><span class="Textarea__label Textarea__label--hidden">Placeholder</span></label>'
    );
  });

  it('renders with a label', () => {
    const component = shallow(
      <Textarea placeholder='Placeholder' defaultValue='Hello' label='Label' />
    );

    expect(component.html()).toEqual(
      '<label class="Textarea"><textarea class="Textarea__textarea" placeholder="Placeholder">Hello</textarea><span class="Textarea__label">Label</span></label>'
    );
  });

  it('renders with an error', () => {
    const component = shallow(
      <Textarea placeholder='Placeholder' defaultValue='Hello' label='Label' error='Error' />
    );

    expect(component.html()).toEqual(
      '<label class="Textarea"><textarea class="Textarea__textarea Textarea__textarea--error" placeholder="Placeholder">Hello</textarea><span class="Textarea__label Textarea__label--error">Error</span></label>'
    );
  });

  it('renders with a className', () => {
    const component = shallow(
      <Textarea className='Custom' placeholder='Placeholder' defaultValue='Hello' label='Label' />
    );

    expect(component.html()).toEqual(
      '<label class="Textarea Custom"><textarea class="Textarea__textarea" placeholder="Placeholder">Hello</textarea><span class="Textarea__label">Label</span></label>'
    );
  });
});
