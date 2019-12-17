import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { States } from '../../utilities/States';
import { Text } from '../Text';
import { SearchInput } from './SearchInput';

export default { title: 'Components|SearchInput' };

export const Default = () => (
  <States states={[null, { value: 'prada' }, { autoFocus: true }]}>
    <SearchInput
      placeholder='Search'
      onChange={action('onChange')}
      onChangeValue={action('onChangeValue')}
    />
  </States>
);

export const DropdownExample = () => {
  const [query, setQuery] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <SearchInput placeholder='Search' onChangeValue={setQuery} autoFocus />

      {query && (
        <Text style={{ border: '1px solid gray', marginTop: '-1px', padding: '1rem' }}>
          You searched for: {query}
        </Text>
      )}
    </div>
  );
};

DropdownExample.story = { parameters: { viewport: { defaultViewport: 'xs' } } };
