import React from 'react';
import classNames from 'classnames';

import './Clickable.scss';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Clickable: React.FC<Props> = ({ className, ...rest }) => (
  <button className={classNames('Clickable', className)} {...rest} />
);
