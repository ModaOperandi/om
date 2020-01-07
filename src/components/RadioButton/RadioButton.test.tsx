import React from 'react';
import { mount } from 'enzyme';

import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('renders correctly', () => {
    const component = mount(<RadioButton />);
    expect(component.html()).toEqual(
      '<label class="RadioButton"><input class="RadioButton__input" type="radio" value=""></label>'
    );
  });

  it('supports checked', () => {
    const component = mount(<RadioButton checked readOnly />);
    expect(component.html()).toEqual(
      '<label class="RadioButton RadioButton--checked"><input class="RadioButton__input" type="radio" readonly="" value="" checked=""></label>'
    );
  });
});
