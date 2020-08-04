import React from 'react';
import { shallow } from 'enzyme';

import { MiniLoading } from './MiniLoading';

describe('MiniLoading', () => {
  it('renders correctly', () => {
    const component = shallow(<MiniLoading />);
    expect(component.html()).toEqual(
      '<div class="MiniLoading"><svg class="LoadingTriangle" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9986 0L0 24H24L11.9986 0Z" fill="#D56B27"></path></svg></div>'
    );
  });
});
