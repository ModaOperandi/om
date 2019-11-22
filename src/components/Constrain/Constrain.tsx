import React from 'react';
import classNames from 'classnames';

import './Constrain.scss';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Constrain: React.FC<Props> = ({ className, children, ...rest }) => (
  <div className={classNames('Constrain', className)} {...rest}>
    {children}
  </div>
);
