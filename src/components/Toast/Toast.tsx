import React from 'react';
import classNames from 'classnames';
import { Clickable } from '../Clickable';
import { Text } from '../Text';
import { Stack, StackProps } from '../Stack';
import ExitIcon from '@moda/icons/exit-16';
import './Toast.scss';

export type ToastProps = {
  theme: 'success' | 'warning' | 'error';
  onRemove?: () => void;
} & Omit<StackProps, 'direction' | 'space'>;

export const Toast: React.FC<ToastProps> = ({ theme, className, onRemove, children, ...rest }) => (
  <Stack
    className={classNames('Toast', `Toast--${theme}`, className)}
    direction='horizontal'
    space={2}
    alignItems='center'
    justifyContent='space-between'
    {...rest}
  >
    <Text treatment='bold1' color='snow'>
      {children}
    </Text>
    {onRemove && (
      <Clickable aria-label='Remove' onClick={onRemove}>
        <ExitIcon />
      </Clickable>
    )}
  </Stack>
);
