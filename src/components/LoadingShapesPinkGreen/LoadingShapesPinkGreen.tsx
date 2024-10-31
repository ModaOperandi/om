import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useCursor } from 'use-cursor';
import {
  LoadingItems1,
  LoadingItems2,
  LoadingItems3,
  LoadingItems4,
  LoadingItems5
} from '../LoadingItemsPinkGreen';

import './LoadingShapesPinkGreen.scss';

const INTERVAL_MS = 250;

export const LoadingShapesPinkGreen = () => {
  const items = [LoadingItems1, LoadingItems2, LoadingItems3, LoadingItems4, LoadingItems5];
  const { index, handleNext } = useCursor({ max: items.length });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div>
      {items.map((Item, itemIndex) => (
        <div
          className={classNames('LoadingShapesPinkGreen__item', {
            'LoadingShapesPinkGreen__item--current': itemIndex !== index
          })}
          key={itemIndex}
        >
          <Item />
        </div>
      ))}
    </div>
  );
};
