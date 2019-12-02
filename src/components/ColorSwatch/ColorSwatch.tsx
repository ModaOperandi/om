import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Clickable, Props as ClickableProps } from '../Clickable';

import { SKU_COLORS, SkuColor } from './skuColors';

import './ColorSwatch.scss';

export interface Props extends Omit<ClickableProps, 'onClick'> {
  color: SkuColor | string;
  hover?: boolean;
  selected?: boolean;
  soldOut?: boolean;
  onSale?: boolean;
  onClick?(color: string): void;
}

export const ColorSwatch: React.FC<Props> = ({
  className,
  color,
  hover,
  selected,
  soldOut,
  onSale,
  onClick,
  ...rest
}) => {
  const handleClick = useCallback((_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && onClick(color);
  }, []);

  return (
    <Clickable
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
      onClick={handleClick}
      {...rest}
    >
      <div
        className='ColorSwatch__chip'
        style={{
          backgroundColor: SKU_COLORS[color as SkuColor] || color
        }}
      />
    </Clickable>
  );
};
