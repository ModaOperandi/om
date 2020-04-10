import React from 'react';
import { shallow } from 'enzyme';

import { Overlay } from './Overlay';

describe('Overlay', () => {
  it('renders correctly', () => {
    const text = 'test-Text';
    const component = shallow(<Overlay>{text}</Overlay>);
    expect(component.text()).toEqual(text);
  });
});
