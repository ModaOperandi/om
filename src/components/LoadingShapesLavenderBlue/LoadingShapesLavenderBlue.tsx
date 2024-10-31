import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useCursor } from 'use-cursor';
import {
  LoadingItemsLavenderBlue1,
  LoadingItemsLavenderBlue2,
  LoadingItemsLavenderBlue3,
  LoadingItemsLavenderBlue4,
  LoadingItemsLavenderBlue5
} from '../LoadingItemsLavenderBlue';

import './LoadingShapesLavenderBlue.scss';

const INTERVAL_MS = 250;

export const LoadingShapesLavenderBlue = () => {
  const items = [
    LoadingItemsLavenderBlue1,
    LoadingItemsLavenderBlue2,
    LoadingItemsLavenderBlue3,
    LoadingItemsLavenderBlue4,
    LoadingItemsLavenderBlue5
  ];
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
          className={classNames('LoadingShapesLavenderBlue__item', {
            'LoadingShapesLavenderBlue__item--current': itemIndex !== index
          })}
          key={itemIndex}
        >
          <Item />
        </div>
      ))}
    </div>
  );
};
