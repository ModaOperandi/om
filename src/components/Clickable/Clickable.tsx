import React from 'react';
import classNames from 'classnames';
import './Clickable.scss';

export type ClickableProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Clickable = React.forwardRef(
  ({ className, ...rest }: ClickableProps, ref: React.Ref<HTMLButtonElement>) => (
    <button className={classNames('Clickable', className)} ref={ref} {...rest} />
  )
);

Clickable.displayName = 'Clickable';
