import React from 'react';
import { action } from '@storybook/addon-actions';
import { States } from '../../utilities/States';
import { Select } from './Select';

export default { title: 'Components|Select' };

const OPTIONS = [
  { value: 'featured', label: 'Featured' },
  {
    value: 'recency',
    label: "What's New"
  },
  {
    value: 'high',
    label: 'Price High to Low'
  },
  {
    value: 'low',
    label: 'Price Low to High'
  }
];

export const Default = () => (
  <States
    states={[{ idRef: '1' }, { idRef: '2', value: 'high' }, { idRef: '3', label: 'Sort — ' }]}
  >
    <Select label='Sort by:' options={OPTIONS} onChange={action('onChange')} />
  </States>
);
