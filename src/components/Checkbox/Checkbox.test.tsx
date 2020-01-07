import React from 'react';
import { mount } from 'enzyme';

import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    const component = mount(<Checkbox />);
    expect(component.html()).toEqual(
      '<label class="Checkbox"><span class="Checkbox__indicator"></span><input class="Checkbox__input" type="checkbox" value=""></label>'
    );
  });

  it('supports checked', () => {
    const component = mount(<Checkbox checked readOnly />);
    const html = component.html();
    expect(html).toContain('<label class="Checkbox Checkbox--checked">');
    expect(html).toContain('type="checkbox" readonly="" value="" checked=""');
  });
});
