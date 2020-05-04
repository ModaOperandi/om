import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import ChevronDownIcon from '@moda/icons/chevron-down-12';
import ChevronUpIcon from '@moda/icons/chevron-up-12';
import { Clickable } from '../Clickable';
import './Expandable.scss';

export type ExpandableProps = React.HTMLAttributes<HTMLDivElement> & {
  name: string;
  expanded?: boolean;
  children: React.ReactNode;
  icon?: 'chevron' | 'plus-minus';
};

export const Expandable: React.FC<ExpandableProps> = ({
  name,
  expanded: __expanded__ = false,
  children,
  className,
  icon = 'plus-minus',
  ...rest
}) => {
  const [expanded, setExpanded] = useState(__expanded__);
  const handleClick = useCallback(() => setExpanded(expanded => !expanded), []);

  return (
    <div
      className={classNames('Expandable', { 'Expandable--expanded': expanded }, className)}
      {...rest}
    >
      <Clickable className={classNames('Expandable__name', { 'Expandable__name--plusMinus': icon === 'plus-minus' })} onClick={handleClick}>
        {name}
        {icon !== 'plus-minus' &&
          <div className="Expandable__icon">
            {icon === 'chevron' && expanded && <ChevronUpIcon />}
            {icon === 'chevron' && !expanded && <ChevronDownIcon />}
          </div>
        }
      </Clickable>

      <div className='Expandable__contents'>{children}</div>
    </div>
  );
};
