import React, { useState } from 'react';
import { SearchSelect } from './SearchSelect';

export default { title: 'Components/SearchSelect' };

const ANIMAL_OPTIONS = [
  { value: 'dog', label: 'Dog' },
  {
    value: 'cat',
    label: 'Cat'
  },
  {
    value: 'zebra',
    label: 'Zebra'
  },
  {
    value: 'elephant',
    label: 'Elephant'
  }
];

export const Default = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <div>
      <SearchSelect
        options={ANIMAL_OPTIONS}
        name='animal'
        value='Animals'
        label={selectedOption ? '' : `${ANIMAL_OPTIONS.length} results`}
        onChange={option => setSelectedOption(option)}
      />
      <div>Selected: {selectedOption}</div>
    </div>
  );
};

export const PlaceholdeSearchSelect = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <div>
      <SearchSelect
        options={ANIMAL_OPTIONS}
        name='animal'
        value={'Animals'}
        label={selectedOption ? '' : `${ANIMAL_OPTIONS.length} results`}
        placeholder='Elephant'
        onChange={option => setSelectedOption(option)}
      />
      <div>Selected: {selectedOption}</div>
    </div>
  );
};
