import React from 'react';
import classNames from 'classnames';
import './Drawer.scss';

export type DrawerProps = React.HTMLAttributes<HTMLDivElement> & {
  open: boolean;
};

export const Drawer: React.FC<DrawerProps> = ({ className, open, children, ...rest }) => (
  <div className={classNames('Drawer', { 'Drawer--open': open }, className)} {...rest}>
    <div className='Drawer__content'>{children}</div>
  </div>
);
