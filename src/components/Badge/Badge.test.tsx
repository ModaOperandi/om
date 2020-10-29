import React from 'react';
import { shallow } from 'enzyme';

import { Badge } from './Badge';

describe('Badge', () => {
  it('supports custom children', () => {
    const component = shallow(<Badge>Custom Text - 1</Badge>);
    expect(component.html()).toEqual('<span class="Badge">Custom Text - 1</span>');
  });

  it('supports custom themes and children', () => {
    const component = shallow(<Badge theme='trending'>Custom Text - 2</Badge>);
    expect(component.html()).toEqual('<span class="Badge Badge--trending">Custom Text - 2</span>');
  });

  it('allows for arbitrary children', () => {
    const component = shallow(<Badge>Hello</Badge>);
    expect(component.text()).toEqual('Hello');
  });
});
