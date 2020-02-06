import React from 'react';
import { RenderProps } from './isRenderProps';
import { State } from './State';
import './States.scss';

export interface Props {
  states?: any[];
  children: JSX.Element | RenderProps;
}

export const States: React.FC<Props> = ({ states = [{}], children, ...rest }) => {
  return (
    <div className='States'>
      {states.map((props, i) => (
        <State key={i} props={props} {...rest}>
          {children}
        </State>
      ))}
    </div>
  );
};
