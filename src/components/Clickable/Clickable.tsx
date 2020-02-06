import React from 'react';
import classNames from 'classnames';
import './Clickable.scss';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Clickable = React.forwardRef(
  ({ className, ...rest }: Props, ref: React.Ref<HTMLButtonElement>) => (
    <button className={classNames('Clickable', className)} ref={ref} {...rest} />
  )
);

Clickable.displayName = 'Clickable';
