import React from 'react';
import './Divider.scss';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  type?: 'no-line' | 'two-line';
  verticalPadding?: string;
}

export const Divider: React.FC<Props> = ({ text, type, ...rest }) => {
  return (
    <div className={'Divider ' + (type ? `Divider--${type}` : '')} {...rest}>
      <div className='Divider__text'>{text}</div>
    </div>
  );
};
