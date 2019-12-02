import React from 'react';
import { shallow } from 'enzyme';

import { ColorSwatch } from './ColorSwatch';

describe('ColorSwatch', () => {
  it('renders correctly', () => {
    const component = shallow(<ColorSwatch color='nude' />);
    expect(component.html()).toEqual(
      '<button class="Clickable ColorSwatch"><div class="ColorSwatch__chip" style="background-color:#eee4d7"></div></button>'
    );
  });
});
