import React from 'react';
import { States } from 'storybook-states';
import * as SHAPES from '.';

export default { title: 'Components/Shape' };

export const Shapes = () => (
  <>
    {Object.entries(SHAPES).map(([name, Component]) => (
      <States key={name}>
        <Component style={{ width: '5rem' }} />
      </States>
    ))}
  </>
);
