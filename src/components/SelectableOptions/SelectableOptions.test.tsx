import React from 'react';
import { mount } from 'enzyme';

import { SelectableOptions } from './SelectableOptions';

describe('SelectableOptions', () => {
  it('selects an option', () => {
    const onSelect = jest.fn();
    const component = mount(
      <SelectableOptions
        onSelect={onSelect}
        options={[
          { label: 'one', value: 1 },
          { label: 'two', value: 2 }
        ]}
      />
    );

    component
      .find('button')
      .at(1)
      .simulate('click');

    expect(onSelect).toHaveBeenCalledWith({ label: 'two', value: 2 });
  });
});
