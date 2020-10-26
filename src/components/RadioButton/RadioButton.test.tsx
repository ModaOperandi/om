import React from 'react';
import { mount } from 'enzyme';

import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('renders correctly', () => {
    const component = mount(<RadioButton />);
    expect(component.html()).toEqual(
      '<label tabindex="-1" class="RadioButton"><span tabindex="-1" class="RadioButton__indicator RadioButton__indicator--unchecked"></span><input tabindex="0" class="RadioButton__input" type="radio" role="radio" value=""></label>'
    );
  });

  it('supports checked', () => {
    const component = mount(<RadioButton checked readOnly />);
    const html = component.html();
    expect(html).toContain('class="RadioButton RadioButton--checked"');
    expect(html).toContain('readonly="" value="" checked=""');
  });
});
