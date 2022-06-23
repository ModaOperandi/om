import React from 'react';
import { Stack } from '../../components/Stack';
import { omit } from '../omit';
import { isRenderProps } from './isRenderProps';
import { stringifyProps } from './stringifyProps';
import './StatesProps.scss';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  children: any;
  props: any;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isEmpty = (obj?: any) => Object.entries(obj || {}).length === 0;

export const StatesProps: React.FC<Props> = ({ props, children }) => {
  const childrenProps = omit(children.props, ...Object.keys(props || {}));

  return (
    <Stack className='StatesProps' space={2} direction='horizontal'>
      <span>{children.type.displayName || children.type.name}</span>
      {!isEmpty(props) && <strong>{stringifyProps(props)}</strong>}
      {!isRenderProps(children) && !isEmpty(childrenProps) && (
        <span>{stringifyProps(childrenProps)}</span>
      )}
      <span> </span>
    </Stack>
  );
};
