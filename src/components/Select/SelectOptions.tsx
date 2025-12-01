import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useKeyboardListNavigation } from '../../hooks/useKeyboardListNavigation';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import { Text } from '../Text';
import { SearchInput } from '../SearchInput';
import { ControlLink } from '../ControlLink';
import { SelectOption } from './SelectOption';
import { SelectableOption, SelectExtraOption } from './Select';

import './SelectOptions.scss';

export type SelectOptionsProps = Omit<
  React.HTMLAttributes<HTMLUListElement>,
  'onSelect' | 'onFocus'
> & {
  idRef?: string;
  searchable?: boolean;
  autoFocus?: boolean;
  options: SelectableOption[];
  selectedOption?: SelectableOption | undefined;
  onFocus?(option: SelectableOption): void;
  onSelect(option: SelectableOption): void;
  dataTestId?: string;
  extraOption?: SelectExtraOption;
  onCloseDropdown?: () => void;
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
  dataTestId,
  extraOption,
  onCloseDropdown,
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
      ref.current?.focus();
    }
  }, [autoFocus]);

  useUpdateEffect(() => {
    if (activeOption) onFocus?.(activeOption);
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
        id={`Select__listbox--${idRef}`}
        className='SelectOptions__list'
        tabIndex={-1}
        role='listbox'
        ref={ref}
        aria-label='Options'
        aria-activedescendant={
          activeOption
            ? `SelectOption--${activeOption.value}${idRef ? `-${idRef}` : ''}`
            : undefined
        }
        {...rest}
      >
        {options.map(option => (
          <SelectOption
            id={`SelectOption--${option.value}${idRef ? `-${idRef}` : ''}`}
            key={option.value}
            option={option}
            dataTestId={dataTestId}
            active={activeOption?.value === option.value}
            selected={selectedOption?.value === option.value}
            onClick={onSelect}
          />
        ))}

        {extraOption && (
          <ControlLink
            className='SelectOptions__extra-option'
            disabled={extraOption.disabled}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              extraOption.callback(event);
              if (extraOption.closeOnClick) {
                onCloseDropdown?.();
              }
            }}
          >
            {extraOption.label}
          </ControlLink>
        )}
      </ul>

      {options.length === 0 && (
        <Text className='SelectOptions__none' color='cement'>
          Nothing found
        </Text>
      )}
    </div>
  );
};
