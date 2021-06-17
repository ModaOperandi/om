import React from 'react';
import { action } from '@storybook/addon-actions';
import { Paginator } from './Paginator';

export default { title: 'Components/Paginator' };

export const with10Pages = () => (
  <div
    style={{
      width: '100vw'
    }}
  >
    <Paginator selectedPage={3} totalPages={20} onGoToPage={action('selected a page')} />
  </div>
);
