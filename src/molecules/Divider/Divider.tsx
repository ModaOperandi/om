import classNames from 'classnames';
import React from 'react';
import './Divider.scss';

export interface Props {
  text: string;
  type?: "no-line" | "two-line";
}

export const Divider: React.FC<Props> = ({text, type}) => {
  return (
    <div className={'Divider ' + (type ? `Divider--${type}` : '')}>
      <div className="Divider__text">{text}</div>
    </div>
  );
};