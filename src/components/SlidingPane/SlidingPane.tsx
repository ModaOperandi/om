import React, { useId } from 'react';
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
  autoFocus?: boolean;
};

export const SlidingPane: React.FC<SlidingPaneProps> = ({
  className,
  title,
  visible,
  children,
  onClose,
  autoFocus = true,
  ...rest
}) => {
  const titleId = useId();

  return (
    <>
      <div
        className={classNames('SlidingPane__overlay', {
          'SlidingPane__overlay--active': visible
        })}
        onClick={onClose}
      ></div>

      <FocusOn
        enabled={visible}
        autoFocus={autoFocus}
        onClickOutside={onClose}
        onEscapeKey={onClose}
      >
        <div
          role='dialog'
          aria-modal='true'
          aria-labelledby={titleId}
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
            <Text id={titleId} treatment='h5' family='serif'>
              {title}
            </Text>
            <Clickable className='SlidingPane__close' aria-label='Close' onClick={onClose}>
              <ExitIcon />
            </Clickable>
          </Stack>
          <div className='SlidingPane__content'>{children}</div>
        </div>
      </FocusOn>
    </>
  );
};
