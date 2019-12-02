import React from 'react';
import { isRenderProps, RenderProps } from './isRenderProps';
import { StatesProps } from './StatesProps';
import './States.scss';

interface Props {
  states?: any[];
  children: JSX.Element | RenderProps;
}

export const States: React.FC<Props> = ({ states = [{}], children, ...rest }) => {
  return (
    <div className='States'>
      {states.map(props => (
        <div className='States__specimen' key={JSON.stringify(props)} {...rest}>
          {isRenderProps(children) ? children(props) : React.cloneElement(children, props)}
          <code className='States__props'>
            <StatesProps props={props} children={children} />
          </code>
        </div>
      ))}
    </div>
  );
};
