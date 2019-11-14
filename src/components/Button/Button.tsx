import React from 'react';

import './Button.scss';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<Props> = ({ children, ...rest }) => (
  <button className='Button' {...rest}>
    {children}
  </button>
);
