import React from 'react';
import { shallow } from 'enzyme';

import { Badge } from './Badge';

describe('Badge', () => {
  it('supports preeet themes', () => {
    const component = shallow(<Badge theme='fall-essential'>Fall Essential</Badge>);
    expect(component.text()).toEqual('Fall Essential');
  });

  it('allows for arbitrary children', () => {
    const component = shallow(<Badge>Hello</Badge>);
    expect(component.text()).toEqual('Hello');
  });
});
