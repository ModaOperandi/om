import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Clickable, Props as ClickableProps } from '../Clickable';

import { SKU_COLORS, SkuColor } from './skuColors';

import './ColorSwatch.scss';

export interface Props extends Omit<Omit<ClickableProps, 'onClick'>, 'onMouseEnter'> {
  color: SkuColor | string;
  backgroundUrl?: string;
  hover?: boolean;
  selected?: boolean;
  soldOut?: boolean;
  onSale?: boolean;
  onClick?(color: string): void;
  onMouseEnter?(color: string): void;
  onMouseLeave?(): void;
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
  onMouseEnter,
  onMouseLeave,
  ...rest
}) => {
  const handleClick = useCallback((_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && onClick(color);
  }, []);

  const handleMouseEnter = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onMouseEnter && onMouseEnter(color);
    },
    []
  );

  const handleMouseLeave = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onMouseLeave && onMouseLeave();
    },
    []
  );

  let styles: React.CSSProperties = {
    backgroundColor: SKU_COLORS[color as SkuColor] || color
  };

  if (backgroundUrl) {
    styles = {
      ...styles,
      backgroundImage: `url(${backgroundUrl})`,
      backgroundSize: 'cover'
    };
  }

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      <div className='ColorSwatch__chip' style={styles} />
    </Clickable>
  );
};
