import React from 'react';
import { mount } from 'enzyme';

import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  it('clears the input when the button is clicked', () => {
    const component = mount(<SearchInput value='Hello' />);
    expect(component.find('input').getElement().props.value).toEqual('Hello');
    component.find('button').simulate('click');
    expect(component.find('input').getElement().props.value).not.toEqual('Hello');
  });
});
