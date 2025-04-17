import React, { JSX } from 'react';
import { isRenderProps } from '../isRenderProps';
import { stringifyProps } from '../stringifyProps';
import { omit } from '../omit';
import { isEmpty } from '../isEmpty';
import { useStyles } from './Styles';

interface Props {
  children: JSX.Element;
  props: object;
}

export const StateProps: React.FC<Props> = ({ props, children }) => {
  const styles = useStyles();
  const childrenProps = omit(children.props, ...Object.keys(props || {}));

  return (
    <div style={styles.stateProps}>
      {'<'}
      <span>{children.type.displayName || children.type.name}</span>{' '}
      {!isEmpty(props) && <strong style={styles.statePropsActive}>{stringifyProps(props)}</strong>}{' '}
      {!isRenderProps(children) && !isEmpty(childrenProps) && (
        <span>{stringifyProps(childrenProps)}</span>
      )}
      <span>{' />'}</span>
    </div>
  );
};
