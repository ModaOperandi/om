import React from 'react';
import { shallow } from 'enzyme';

import { SelectableButton } from './SelectableButton';

describe('SelectableButton', () => {
  it('renders correctly', () => {
    const component = shallow(<SelectableButton>Click me</SelectableButton>);
    expect(component.text()).toEqual('Click me');
  });
});
