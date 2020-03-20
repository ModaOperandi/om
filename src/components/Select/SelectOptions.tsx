import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import { useKeyboardListNavigation } from 'use-keyboard-list-navigation';
import { SelectOption } from './SelectOption';
import { SelectableOption } from './Select';
import './SelectOptions.scss';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';

export type SelectOptionsProps = Omit<
  React.HTMLAttributes<HTMLUListElement>,
  'onSelect' | 'onFocus'
> & {
  idRef: string;
  options: SelectableOption[];
  selectedOption: SelectableOption;
  onFocus?(option: SelectableOption): void;
  onSelect(option: SelectableOption): void;
};

export const SelectOptions: React.FC<SelectOptionsProps> = ({
  idRef,
  options,
  selectedOption,
  onSelect,
  onFocus,
  className,
  ...rest
}) => {
  const { index: activeIndex, selected: activeOption } = useKeyboardListNavigation({
    list: options,
    onEnter: onSelect,
    extractValue: option => option.label.toLowerCase()
  });

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    ref.current && ref.current.focus();
  }, []);

  useUpdateEffect(() => {
    onFocus && onFocus(options[activeIndex]);
  }, [activeIndex, onFocus, options]);

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
