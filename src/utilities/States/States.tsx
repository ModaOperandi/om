import React, { JSX } from 'react';
import { RenderProps } from '../isRenderProps';
import { State } from './State';

export interface Props<T> {
  states?: T[];
  children: JSX.Element | RenderProps<T>;
}

export const States = <T extends object>({ states = [{} as T], children, ...rest }: Props<T>) => {
  return (
    <>
      {states.map((props, index) => (
        <State<T> key={index} props={props} {...rest}>
          {children}
        </State>
      ))}
    </>
  );
};
