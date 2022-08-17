import React, { useEffect, useCallback, useState, ReactNode } from 'react';
import classNames from 'classnames';
import ChevronDownIcon from '@moda/icons/chevron-down-12';
import ChevronUpIcon from '@moda/icons/chevron-up-12';
import { Clickable } from '../Clickable';
import './Expandable.scss';

export type ExpandableProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string | ReactNode;
  defaultExpanded?: boolean;
  expanded?: boolean;
  children: ReactNode;
  icon?: 'chevron' | 'plus-minus';
  virtual?: boolean;
  'data-testid'?: string;
  onToggle?: () => void;
};

export const Expandable: React.FC<ExpandableProps> = ({
  name,
  children,
  className,
  virtual = false,
  icon = 'plus-minus',
  'data-testid': dataTestId,
  defaultExpanded = false,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  expanded: __expanded__,
  onToggle,
  ...rest
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  useEffect(() => {
    if (__expanded__ != null && __expanded__ !== expanded) setExpanded(__expanded__);
  }, [expanded, __expanded__]);

  const handleClick = useCallback(() => {
    setExpanded(expanded => !expanded);
    onToggle?.();
  }, [onToggle]);

  return (
    <div
      className={classNames('Expandable', { 'Expandable--expanded': expanded }, className)}
      {...rest}
    >
      <Clickable
        className={classNames('Expandable__name', {
          'Expandable__name--plusMinus': icon === 'plus-minus'
        })}
        onClick={handleClick}
        data-testid={dataTestId}
      >
        {name}

        {icon !== 'plus-minus' && (
          <div className='Expandable__icon'>
            {icon === 'chevron' && expanded && <ChevronUpIcon />}
            {icon === 'chevron' && !expanded && <ChevronDownIcon />}
          </div>
        )}
      </Clickable>

      <div className='Expandable__contents'>{expanded || !virtual ? children : null}</div>
    </div>
  );
};
