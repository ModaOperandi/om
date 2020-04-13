import React from 'react';
import classNames from 'classnames';

import './Overlay.scss';

export type OverlayProps = React.HTMLAttributes<HTMLDivElement>;

export const Overlay: React.FC<OverlayProps> = ({ className, children, ...rest }) => (
  <div className={classNames('Overlay', className)} {...rest}>
    {children}
  </div>
);
