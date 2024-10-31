import React from 'react';
import { States } from 'storybook-states';
import * as LOADINGITEMS from '.';

export default { title: 'Components/Shape' };

export const LoadingItemsPinkGreen = () => (
  <>
    {Object.entries(LOADINGITEMS).map(([name, Component]) => (
      <States key={name}>
        <Component style={{ width: '5rem' }} />
      </States>
    ))}
  </>
);
