import React from 'react';

import { Text } from '../Text';
import { Constrain } from './Constrain';
import { ExceedConstrain } from './ExceedConstrain';

export default { title: 'Components/ExceedConstrain' };

const Constrained = () => {
  return (
    <Constrain>
      <div style={{ backgroundColor: 'black', color: 'white', padding: '1rem' }}>
        <Text color='snow'>This div is constrained.</Text>
      </div>
      <ExceedConstrain style={{ backgroundColor: 'gray', color: 'white', padding: '1rem' }}>
        <Text color='snow'>This exceeds the constrain.</Text>
      </ExceedConstrain>
    </Constrain>
  );
};

export const MediumViewport = () => <Constrained />;
MediumViewport.story = { parameters: { viewport: { defaultViewport: 'md' } } };

export const SmallViewport = () => <Constrained />;
SmallViewport.story = { parameters: { viewport: { defaultViewport: 'sm' } } };

export const XSmallViewport = () => <Constrained />;
XSmallViewport.story = { parameters: { viewport: { defaultViewport: 'xs' } } };
