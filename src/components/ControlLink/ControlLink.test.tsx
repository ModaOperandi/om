import React from 'react';
import { shallow } from 'enzyme';

import { ControlLink } from './ControlLink';

describe('ControlLink', () => {
  it('renders correctly', () => {
    const component = shallow(<ControlLink> click me! </ControlLink>);
    expect(component.html()).toEqual(
      '<button class="Clickable ControlLink ControlLink--underlined"> click me! </button>'
    );
  });

  it('renders correctly while disabled', () => {
    const component = shallow(<ControlLink disabled> do not click me! </ControlLink>);
    expect(component.html()).toEqual(
      '<button class="Clickable ControlLink ControlLink--underlined ControlLink--disabled" disabled=""> do not click me! </button>'
    );
  });

  it('renders correctly while underlined', () => {
    const component = shallow(<ControlLink underlined> click me! </ControlLink>);
    expect(component.html()).toEqual(
      '<button class="Clickable ControlLink ControlLink--underlined"> click me! </button>'
    );
  });
});
