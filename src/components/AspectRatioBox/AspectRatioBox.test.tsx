import React from 'react';
import { shallow } from 'enzyme';

import { AspectRatioBox } from './AspectRatioBox';

describe('AspectRatioBox', () => {
  it('renders correctly', () => {
    const component = shallow(
      <AspectRatioBox maxHeight={100} maxWidth={100}>
        Hello
      </AspectRatioBox>
    );
    expect(component.text()).toEqual('Hello');
  });
});
