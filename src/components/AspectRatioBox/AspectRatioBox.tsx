import React from 'react';
import classNames from 'classnames';
import { scale, paddingBottom } from 'proportional-scale';
import './AspectRatioBox.scss';

export const DEFAULT_PRODUCT_ASPECT_WIDTH = 128;
export const DEFAULT_PRODUCT_ASPECT_HEIGHT = 205;
export const DEFAULT_PRODUCT_ASPECT_RATIO =
  DEFAULT_PRODUCT_ASPECT_HEIGHT / DEFAULT_PRODUCT_ASPECT_WIDTH;

export type AspectRatioBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  aspectWidth?: number;
  aspectHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  outlined?: boolean;
};

const scaleDimensions = ({
  width,
  height,
  maxWidth,
  maxHeight
}: {
  width: number;
  height: number;
  maxWidth?: number;
  maxHeight?: number;
}) => {
  if (maxWidth && maxHeight) return scale({ width, height, maxWidth, maxHeight });

  if (maxWidth) return scale({ width, height, maxWidth });

  if (maxHeight) return scale({ width, height, maxHeight });

  return { width, height, paddingBottom: paddingBottom({ width, height }), scale: 1 };
};

export const AspectRatioBox = React.forwardRef(
  (
    {
      aspectWidth = DEFAULT_PRODUCT_ASPECT_WIDTH,
      aspectHeight = DEFAULT_PRODUCT_ASPECT_HEIGHT,
      maxWidth,
      maxHeight,
      outlined = false,
      children,
      className,
      ...rest
    }: AspectRatioBoxProps,
    forwardedRef: React.Ref<HTMLDivElement>
  ) => {
    const { width, paddingBottom } = scaleDimensions({
      width: aspectWidth,
      height: aspectHeight,
      maxWidth,
      maxHeight
    });

    return (
      <div
        ref={forwardedRef}
        className={classNames(
          'AspectRatioBox',
          {
            'AspectRatioBox--outlined': outlined
          },
          className
        )}
        style={maxWidth || maxHeight ? { maxWidth: `${width}px` } : undefined}
        {...rest}
      >
        <div className='AspectRatioBox__wrapper' style={{ paddingBottom }} />
        <div className='AspectRatioBox__content'>{children}</div>
      </div>
    );
  }
);

AspectRatioBox.displayName = 'AspectRatioBox';
