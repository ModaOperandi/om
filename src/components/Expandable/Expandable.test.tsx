import React from 'react';
import { mount } from 'enzyme';

import { Expandable } from './Expandable';

describe('Expandable', () => {
  it('expands when clicked', () => {
    const component = mount(<Expandable name='Hello'>Goodbye</Expandable>);
    expect(component.html()).not.toContain('expanded');
    component.find('button').simulate('click');
    expect(component.html()).toContain('expanded');
  });
});
