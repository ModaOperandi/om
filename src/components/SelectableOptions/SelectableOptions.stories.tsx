import React from 'react';
import { action } from '@storybook/addon-actions';

import { SelectableOptions } from './SelectableOptions';

export default { title: 'Components|SelectableOptions' };

export const Default = () => (
  <SelectableOptions
    options={[
      { label: 'US 29', value: 'US 28', unavailable: true },
      { label: 'US 29', value: 'US 29', unavailable: true },
      { label: 'US 30', value: 'US 30' },
      { label: 'US 31', value: 'US 31', unavailable: true },
      { label: 'US 32', value: 'US 32', unavailable: true },
      { label: 'US 33', value: 'US 33' },
      { label: 'US 34', value: 'US 34' },
      { label: 'US 35', value: 'US 35' },
      { label: 'US 36', value: 'US 36' }
    ]}
    onSelect={action('onSelect')}
  />
);
