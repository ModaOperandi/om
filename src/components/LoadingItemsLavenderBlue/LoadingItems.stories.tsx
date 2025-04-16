import React from 'react';
import { States } from '../../utilities';
import * as LOADINGITEMS from '.';

export default { title: 'Components/Shape' };

export const LoadingItemsLavenderBlue = () => (
  <>
    {Object.entries(LOADINGITEMS).map(([name, Component]) => (
      <States key={name}>
        <Component style={{ width: '5rem' }} />
      </States>
    ))}
  </>
);
