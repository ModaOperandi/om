import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Clickable } from '../Clickable';
import { SKU_COLORS, SkuColor } from './skuColors';
import './ColorSwatch.scss';

export type ColorSwatchSize = 'default' | 'small';

export type ColorSwatchProps = Omit<
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>,
  'onMouseEnter'
> & {
  size?: ColorSwatchSize;
  color: SkuColor | string;
  backgroundUrl?: string;
  focus?: boolean;
  hover?: boolean;
  selected?: boolean;
  soldOut?: boolean;
  onSale?: boolean;
  onClick?(color: string, title?: string): void;
  onMouseEnter?(color: string, title?: string): void;
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
  title,
  ...rest
}) => {
  const handleClick = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick?.(color, title);
    },
    [color, title, onClick]
  );

  const handleMouseEnter = useCallback(
    (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onMouseEnter?.(color, title);
    },
    [color, title, onMouseEnter]
  );

  const backgroundColor = SKU_COLORS[color as SkuColor] ?? color;

  const isWhite =
    !backgroundUrl &&
    (!backgroundColor.startsWith('#') ||
      backgroundColor.toLowerCase() === '#fff' ||
      backgroundColor.toLowerCase() === '#ffffff');

  const styles: React.CSSProperties = {
    backgroundColor,
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
          'ColorSwatch--light': isWhite,
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
      title={title}
      {...rest}
    >
      <div className='ColorSwatch__chip' style={styles} />
    </Clickable>
  );
};
