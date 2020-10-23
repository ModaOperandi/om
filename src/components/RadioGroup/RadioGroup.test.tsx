import React from 'react';
import { shallow } from 'enzyme';

import { RadioGroup } from './RadioGroup';
import { RadioButton } from '../RadioButton';
import { Text } from '../Text';

describe('RadioGroup', () => {
  it('renders correctly', () => {
    const component = shallow(
      <RadioGroup>
        <Text treatment='bold1'>Pizza Crust</Text>

        <RadioButton tabIndex={0}>Regular crust</RadioButton>

        <RadioButton tabIndex={0}>Deep dish</RadioButton>

        <RadioButton tabIndex={0}>Thin crust</RadioButton>
      </RadioGroup>
    );

    expect(component.html()).toEqual(
      '<div class="RadioGroup" role="radiogroup"><span class="Text Text--bold1 " style="color:rgb(25, 26, 27)">Pizza Crust</span><label role="radio" tabindex="0" class="RadioButton"><span tabindex="-1" class="RadioButton__indicator RadioButton__indicator--unchecked"></span><input type="radio" tabindex="0" class="RadioButton__input"/><span class="RadioButton__label" tabindex="-1">Regular crust</span></label><label role="radio" tabindex="0" class="RadioButton"><span tabindex="-1" class="RadioButton__indicator RadioButton__indicator--unchecked"></span><input type="radio" tabindex="0" class="RadioButton__input"/><span class="RadioButton__label" tabindex="-1">Deep dish</span></label><label role="radio" tabindex="0" class="RadioButton"><span tabindex="-1" class="RadioButton__indicator RadioButton__indicator--unchecked"></span><input type="radio" tabindex="0" class="RadioButton__input"/><span class="RadioButton__label" tabindex="-1">Thin crust</span></label></div>'
    );
  });
});
