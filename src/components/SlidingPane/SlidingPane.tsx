import React from 'react';
import classNames from 'classnames';
import ExitIcon from '@moda/icons/exit-16';
import { FocusOn } from 'react-focus-on';
import { Clickable } from '../Clickable';
import { Text } from '../Text';
import { Stack } from '../Stack';
import './SlidingPane.scss';

export type SlidingPaneProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  title: string;
  visible: boolean;
  onClose: () => void;
};

export const SlidingPane: React.FC<SlidingPaneProps> = ({
  className,
  title,
  visible,
  children,
  onClose,
  ...rest
}) => {
  return (
    <>
      <div
        className={classNames('SlidingPane__overlay', {
          'SlidingPane__overlay--active': visible
        })}
        onClick={onClose}
      ></div>

      <FocusOn enabled={visible} onClickOutside={onClose} onEscapeKey={onClose}>
        <div
          className={classNames('SlidingPane', className, {
            'SlidingPane--active': visible
          })}
          {...rest}
        >
          <Stack
            space={0}
            justifyContent='center'
            direction='horizontal'
            className='SlidingPane__top'
          >
            <Text treatment='h5' family='serif'>
              {title}
            </Text>
            <Clickable className='SlidingPane__close' onClick={onClose}>
              <ExitIcon />
            </Clickable>
          </Stack>
          <div className='SlidingPane__content'>{children}</div>
        </div>
      </FocusOn>
    </>
  );
};
