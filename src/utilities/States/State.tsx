import React from 'react';
import { isRenderProps, RenderProps } from './isRenderProps';
import { StatesProps } from './StatesProps';
import './State.scss';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any;
  children: JSX.Element | RenderProps;
}

export const State: React.FC<Props> = ({ props, children, ...rest }) => {
  const Specimen = isRenderProps(children) ? children(props) : React.cloneElement(children, props);
  const innerChildren = isRenderProps(children) ? children(props) : children;

  return (
    <div className='State' {...rest}>
      {Specimen}

      <code className='State__props'>
        <StatesProps props={props}>{innerChildren}</StatesProps>
      </code>
    </div>
  );
};
