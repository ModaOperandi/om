
import React from 'react';
import { shallow } from 'enzyme';

import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('renders correctly', () => {
    const component = shallow(<RadioButton />);
    expect(component.text()).toEqual('Hello');
  });
});
