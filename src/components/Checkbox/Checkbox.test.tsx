import React from 'react';
import { mount } from 'enzyme';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    const component = mount(<Checkbox />);
    expect(component.html()).toEqual(
      '<label class="Checkbox"><input class="Checkbox__input" type="checkbox" value=""></label>'
    );
  });

  it('supports checked', () => {
    const component = mount(<Checkbox checked readOnly />);
    expect(component.html()).toEqual(
      '<label class="Checkbox Checkbox--checked"><input class="Checkbox__input" type="checkbox" readonly="" value="" checked=""></label>'
    );
  });
});
