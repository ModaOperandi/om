import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useKeyboardListNavigation } from '../../hooks/useKeyboardListNavigation';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import { Text } from '../Text';
import { SearchInput } from '../SearchInput';
import { SelectOption } from './SelectOption';
import { SelectableOption } from './Select';
import './SelectOptions.scss';

export type SelectOptionsProps = Omit<
  React.HTMLAttributes<HTMLUListElement>,
  'onSelect' | 'onFocus'
> & {
  idRef: string;
  searchable?: boolean;
  autoFocus?: boolean;
  options: SelectableOption[];
  selectedOption?: SelectableOption | undefined;
  onFocus?(option: SelectableOption): void;
  onSelect(option: SelectableOption): void;
};

export const SelectOptions: React.FC<SelectOptionsProps> = ({
  idRef,
  searchable,
  autoFocus = true,
  options: allOptions,
  selectedOption,
  onSelect,
  onFocus,
  className,
  ...rest
}) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const options = allOptions.filter(option =>
    option.label.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  const { selected: activeOption } = useKeyboardListNavigation({
    list: options.filter(option => !option.disabled),
    defaultSelected: selectedOption,
    onEnter: ({ element }) => element && onSelect(element),
    extractValue: option => option?.label.toLowerCase()
  });

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (autoFocus) {
      ref.current && ref.current.focus();
    }
  }, [autoFocus]);

  useUpdateEffect(() => {
    onFocus && activeOption && onFocus(activeOption);
  }, [activeOption, onFocus]);

  return (
    <div className={classNames('SelectOptions', className)}>
      {searchable && (
        <SearchInput
          className='SelectOptions__search'
          placeholder='Search'
          value={searchPhrase}
          onChange={setSearchPhrase}
          onClear={() => setSearchPhrase('')}
        />
      )}
      <ul
        className='SelectOptions__list'
        tabIndex={-1}
        role='listbox'
        ref={ref}
        aria-labelledby={`Select__label--${idRef}`}
        aria-activedescendant={`SelectOption--${activeOption?.value}-${idRef}`}
        {...rest}
      >
        {options.map(option => (
          <SelectOption
            id={`SelectOption--${option.value}-${idRef}`}
            key={option.value}
            option={option}
            active={activeOption?.value === option.value}
            selected={selectedOption?.value === option.value}
            onClick={onSelect}
          >
            {option.label}
          </SelectOption>
        ))}
      </ul>
      {options.length === 0 && (
        <Text className='SelectOptions__none' color='cement'>
          Nothing found
        </Text>
      )}
    </div>
  );
};
