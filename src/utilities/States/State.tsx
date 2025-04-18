import React, { JSX } from 'react';
import { isRenderProps, RenderProps } from '../isRenderProps';
import { StateProps } from './StateProps';
import { useStyles } from './Styles';

interface Props<T> {
  props: T;
  children: JSX.Element | RenderProps<T>;
}

export const State = <T extends object>({ props, children, ...rest }: Props<T>) => {
  const styles = useStyles();

  const Specimen = isRenderProps(children) ? children(props) : React.cloneElement(children, props);

  const innerChildren = isRenderProps(children) ? children(props) : children;

  return (
    <div style={styles.state} {...rest}>
      {Specimen}

      <StateProps props={props}>{innerChildren}</StateProps>
    </div>
  );
};
