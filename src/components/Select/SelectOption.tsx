import React, { useCallback, useRef, useEffect } from 'react';
import classNames from 'classnames';
import scrollIntoView from 'scroll-into-view-if-needed';
import { SelectableOption } from './Select';
import './SelectOption.scss';

export type SelectOptionProps = Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> & {
  active: boolean;
  selected: boolean;
  option: SelectableOption;
  onClick: (option: SelectableOption) => void;
};

export const SelectOption: React.FC<SelectOptionProps> = ({
  active,
  selected,
  option,
  onClick,
  className
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const handleClick = useCallback(
    event => {
      event.preventDefault();
      !option.disabled && onClick(option);
    },
    [onClick, option]
  );

  useEffect(() => {
    if (active && ref.current) {
      scrollIntoView(ref.current, { scrollMode: 'if-needed', block: 'nearest' });
    }
  }, [active, ref]);

  return (
    <li
      ref={ref}
      className={classNames('SelectOption', className, {
        'SelectOption--active': active,
        'SelectOption--selected': selected,
        'SelectOption--disabled': option.disabled
      })}
      onClick={handleClick}
      aria-label={option.label}
      aria-selected={selected}
      role='option'
    >
      {option.label}
    </li>
  );
};
