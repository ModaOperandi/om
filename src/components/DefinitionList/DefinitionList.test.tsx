import React from 'react';
import { shallow } from 'enzyme';

import { DefinitionList } from './DefinitionList';

describe('DefinitionList', () => {
  it('renders correctly', () => {
    const component = shallow(<DefinitionList term='Foo'>Bar</DefinitionList>);
    expect(component.text()).toEqual('FooBar');
  });
});
