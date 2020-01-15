import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Clickable, Props as ClickableProps } from '../Clickable';

import { SKU_COLORS, SkuColor } from './skuColors';

import './ColorSwatch.scss';

export interface Props extends Omit<ClickableProps, 'onClick'> {
  color: SkuColor | string;
  backgroundUrl?: string;
  hover?: boolean;
  selected?: boolean;
  soldOut?: boolean;
  onSale?: boolean;
  onClick?(color: string): void;
  onHover?(color: string | undefined): void;
}

export const ColorSwatch: React.FC<Props> = ({
  className,
  color,
  backgroundUrl,
  hover,
  selected,
  soldOut,
  onSale,
  onClick,
  onHover,
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
      onMouseOver={() => onHover && onHover(color)}
      onMouseOut={() => onHover && onHover(undefined)}
      {...rest}
    >
      <div
        className='ColorSwatch__chip'
        style={{
          backgroundColor: SKU_COLORS[color as SkuColor] || color,
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: 'cover'
        }}
      />
    </Clickable>
  );
};
