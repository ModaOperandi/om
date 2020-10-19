import React, { useEffect, useState, useCallback, useRef } from 'react';

import { Text } from '../Text';
import { Constrain } from './Constrain';

export default { title: 'Components/Constrain' };

const Constrained = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [constrainWidth, setConstrainWidth] = useState(ref.current && ref.current.offsetWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    setConstrainWidth((ref.current && ref.current.offsetWidth) || 0);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <Constrain>
      <div ref={ref} style={{ backgroundColor: 'black', color: 'white', padding: '1rem' }}>
        <Text color='snow'>
          window: {windowWidth}px
          <br />
          constrained: {constrainWidth}px
        </Text>
      </div>
    </Constrain>
  );
};

export const LargeViewport = () => <Constrained />;
LargeViewport.story = { parameters: { viewport: { defaultViewport: 'lg' } } };

export const MediumViewport = () => <Constrained />;
MediumViewport.story = { parameters: { viewport: { defaultViewport: 'md' } } };

export const SmallViewport = () => <Constrained />;
SmallViewport.story = { parameters: { viewport: { defaultViewport: 'sm' } } };

export const XSmallViewport = () => <Constrained />;
XSmallViewport.story = { parameters: { viewport: { defaultViewport: 'xs' } } };
