import React, { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { States } from 'storybook-states';
import { Text } from '../Text';
import { SearchInput, SearchInputProps } from './SearchInput';

export default { title: 'Components/SearchInput' };

export const Default = () => (
  <States<SearchInputProps> states={[{}, { value: 'prada' }, { autoFocus: true }]}>
    <SearchInput placeholder='Search' onChange={action('onChange')} />
  </States>
);

export const RoundedBorders = () => (
  <States<SearchInputProps> states={[{}, { value: 'prada' }, { autoFocus: true }]}>
    <SearchInput placeholder='Search' roundBorders onChange={action('onChange')} />
  </States>
);

export const NoBorders = () => (
  <States<SearchInputProps> states={[{}, { value: 'prada' }, { autoFocus: true }]}>
    <SearchInput placeholder='Search' noBorders onChange={action('onChange')} />
  </States>
);

export const DropdownExample = () => {
  const [query, setQuery] = useState('');

  const keyPressHandler = ({ key }: { key: string }) => {
    if (key === 'Enter') {
      setQuery('');
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', keyPressHandler);
    return () => {
      window.removeEventListener('keypress', keyPressHandler);
    };
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <SearchInput placeholder='Search' onChange={setQuery} value={query} autoFocus />

      {query && (
        <Text style={{ border: '1px solid gray', marginTop: '-1px', padding: '1rem' }}>
          You searched for: {query}
        </Text>
      )}
    </div>
  );
};

DropdownExample.story = { parameters: { viewport: { defaultViewport: 'xs' } } };
