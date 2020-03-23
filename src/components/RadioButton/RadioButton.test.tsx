import React from 'react';
import { mount } from 'enzyme';

import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  it('renders correctly', () => {
    const component = mount(<RadioButton />);
    expect(component.html()).toEqual(
      '<label class="RadioButton"><span class="RadioButton__indicator RadioButton__indicator--unchecked"></span><input class="RadioButton__input" type="radio" value=""></label>'
    );
  });

  it('supports checked', () => {
    const component = mount(<RadioButton checked readOnly />);
    const html = component.html();
    expect(html).toContain('<label class="RadioButton RadioButton--checked">');
    expect(html).toContain('readonly="" value="" checked=""');
  });
});
