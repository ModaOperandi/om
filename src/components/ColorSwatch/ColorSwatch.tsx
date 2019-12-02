import React from 'react';
import classNames from 'classnames';

import { SKU_COLORS, SkuColor } from './skuColors';

import './ColorSwatch.scss';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color: SkuColor;
  hover?: boolean;
  selected?: boolean;
  soldOut?: boolean;
  onSale?: boolean;
}

export const ColorSwatch: React.FC<Props> = ({
  className,
  color,
  hover,
  selected,
  soldOut,
  onSale,
  ...rest
}) => (
  <div
    className={classNames(
      'ColorSwatch',
      {
        'ColorSwatch--hover': hover,
        'ColorSwatch--selected': selected,
        'ColorSwatch--sold-out': soldOut,
        'ColorSwatch--on-sale': onSale
      },
      className
    )}
    {...rest}
  >
    <div
      className='ColorSwatch__chip'
      style={{
        backgroundColor: SKU_COLORS[color] || color
      }}
    />
  </div>
);
