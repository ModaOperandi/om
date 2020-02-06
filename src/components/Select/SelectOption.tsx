import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Option } from './Select';
import './SelectOption.scss';

interface Props extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> {
  active: boolean;
  selected: boolean;
  option: Option;
  onClick: (option: Option) => void;
}

export const SelectOption: React.FC<Props> = ({ active, selected, option, onClick, className }) => {
  const handleClick = useCallback(() => onClick(option), [onClick, option]);

  return (
    <li
      className={classNames('SelectOption', className, {
        'SelectOption--active': active,
        'SelectOption--selected': selected
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
