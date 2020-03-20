import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Clickable, ClickableProps } from '../Clickable';
import { SKU_COLORS, SkuColor } from './skuColors';
import './ColorSwatch.scss';

export type ColorSwatchSize = 'default' | 'small';

export type ColorSwatchProps = Omit<Omit<ClickableProps, 'onClick'>, 'onMouseEnter'> & {
  size?: ColorSwatchSize;
  color: SkuColor | string;
  backgroundUrl?: string;
  focus?: boolean;
  hover?: boolean;
  selected?: boolean;
  soldOut?: boolean;
  onSale?: boolean;
  onClick?(color: string): void;
  onMouseEnter?(color: string): void;
};

export const ColorSwatch: React.FC<ColorSwatchProps> = ({
  className,
  size,
  color,
  backgroundUrl,
  focus,
  hover,
  selected,
  soldOut,
  onSale,
  onClick,
  onMouseEnter,
  disabled,
  ...rest
}) => {
  const handleClick = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick && onClick(color);
    },
    [color, onClick]
  );

  const handleMouseEnter = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onMouseEnter && onMouseEnter(color);
    },
    [color, onMouseEnter]
  );

  const backgroundColor = SKU_COLORS[color as SkuColor];

  const styles: React.CSSProperties = {
    backgroundColor: backgroundColor ?? color,
    ...(backgroundUrl
      ? {
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: 'cover'
        }
      : {})
  };

  return (
    <Clickable
      className={classNames(
        `ColorSwatch`,
        {
          'ColorSwatch--light': !backgroundColor || backgroundColor === '#fff',
          'ColorSwatch--small': size === 'small',
          'ColorSwatch--hover': hover,
          'ColorSwatch--focus': focus,
          'ColorSwatch--selected': selected,
          'ColorSwatch--sold-out': soldOut,
          'ColorSwatch--on-sale': onSale
        },
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      disabled={disabled}
      {...rest}
    >
      <div className='ColorSwatch__chip' style={styles} />
    </Clickable>
  );
};
