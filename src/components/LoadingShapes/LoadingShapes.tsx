import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useCursor } from 'use-cursor';
import { ArcWindow, Circle, Diamond, Triangle } from '../Shape';
import { Stack } from '../Stack';

import './LoadingShapes.scss';

const INTERVAL = 100;

export const LoadingShapes = () => {
  const items = [Triangle, Diamond, ArcWindow, Circle];
  const { index, handleNext } = useCursor({ max: items.length });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <Stack className='LoadingShapes' direction='horizontal' space={2}>
      {items.map((Item, itemIndex) => (
        <div
          className={classNames('LoadingShapes__item', {
            'LoadingShapes__item--current': itemIndex !== index
          })}
          key={itemIndex}
        >
          <Item />
        </div>
      ))}
    </Stack>
  );
};
