import React, { useCallback } from 'react';
import classNames from 'classnames';
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
  className,
}) => {
  const handleClick = useCallback(() => !option.disabled && onClick(option), [onClick, option]);

  return (
    <li
      className={classNames('SelectOption', className, {
        'SelectOption--active': active,
        'SelectOption--selected': selected,
        'SelectOption--disabled': option.disabled,
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
