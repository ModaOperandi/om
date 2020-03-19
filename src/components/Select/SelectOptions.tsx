import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useKeyboardListNavigation } from 'use-keyboard-list-navigation';
import { SelectOption } from './SelectOption';
import { SelectableOption } from './Select';
import './SelectOptions.scss';

export type SelectOptionsProps = Omit<React.HTMLAttributes<HTMLUListElement>, 'onSelect'> & {
  idRef: string;
  options: SelectableOption[];
  selectedOption: SelectableOption;
  onSelect(option: SelectableOption): void;
};

export const SelectOptions: React.FC<SelectOptionsProps> = ({
  idRef,
  options,
  selectedOption,
  onSelect,
  className,
  ...rest
}) => {
  const { index: activeIndex, selected: activeOption } = useKeyboardListNavigation({
    list: options,
    onEnter: onSelect
  });

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    ref.current && ref.current.focus();
  }, []);

  return (
    <ul
      className={classNames('SelectOptions', className)}
      tabIndex={-1}
      role='listbox'
      ref={ref}
      aria-labelledby={`Select__label--${idRef}`}
      aria-activedescendant={`SelectOption--${activeOption.value}-${idRef}`}
      {...rest}
    >
      {options.map((option, index) => (
        <SelectOption
          id={`SelectOption--${option.value}-${idRef}`}
          key={option.value}
          option={option}
          active={activeIndex === index}
          selected={selectedOption.value === option.value}
          onClick={onSelect}
        >
          {option.label}
        </SelectOption>
      ))}
    </ul>
  );
};
