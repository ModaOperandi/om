import React from 'react';
import classNames from 'classnames';
import './Divider.scss';

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
  type?: 'no-line' | 'two-line';
  verticalPadding?: string;
};

export const Divider: React.FC<DividerProps> = ({ text, type, className, ...rest }) => {
  return (
    <div className={classNames(`Divider ${type ? `Divider--${type}` : ''}`, className)} {...rest}>
      <div className='Divider__text'>{text}</div>
    </div>
  );
};
