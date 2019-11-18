import React from 'react';
import './Divider.scss';

export interface Props {
  text: string;
  type?: 'no-line' | 'two-line';
  verticalPadding?: string;
}

export const Divider: React.FC<Props> = ({ text, type, verticalPadding }) => {
  let padding = '';
  if (verticalPadding) {
    padding = `${verticalPadding} 0`;
  }

  return (
    <div className={'Divider ' + (type ? `Divider--${type}` : '')} style={{ padding }}>
      <div className='Divider__text'>{text}</div>
    </div>
  );
};
