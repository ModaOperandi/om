import React from 'react';
import { action } from '@storybook/addon-actions';
import { States } from 'storybook-states';
import { Tag, TagProps } from './Tag';

export default { title: 'Components|Tag' };

export const Default = () => (
  <States<TagProps> states={[{}, { disabled: true }]}>
    <Tag onRemove={() => action('removed')}>Label</Tag>
  </States>
);
