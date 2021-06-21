import React, { useCallback, useMemo, useState } from 'react';
import ChevronDownIcon from '@moda/icons/chevron-down-12';
import ChevronUpIcon from '@moda/icons/chevron-up-12';
import classNames from 'classnames';
import { SelectableOption } from '.';
import { SelectOptions } from './SelectOptions';
import { useSelect } from './useSelect';
import ExitIcon from '@moda/icons/exit-16';
import './MultiSelect.scss';

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'value' | 'onChange'> & {
  defaultValue?: string | undefined;
  disabled?: boolean;
  idRef?: string;
  name?: string;
  onChange?: (value: string) => void;
  onRemoveSelectedItem: (value: string) => void;
  options: SelectableOption[];
  value?: string | undefined;
  selectedValues: string[];
  error?: boolean | string;
  shiftIconLeftwards?: boolean;
  ignoreCasing?: boolean;
  dropDirection?: 'down' | 'up';
};

export const MultiSelect: React.FC<Props> = ({
  idRef = '',
  className,
  options,
  name,
  disabled,
  value,
  selectedValues,
  onRemoveSelectedItem,
  onChange,
  defaultValue,
  error,
  shiftIconLeftwards = false,
  ignoreCasing = false,
  dropDirection = 'down',
  ...rest
}) => {
  const { state, dispatch, Mode, selectRef } = useSelect({ value, defaultValue });
  const [filteredValue, setFilteredValue] = useState('');

  const handleSelect = useCallback(
    (option: SelectableOption) => {
      dispatch({ type: 'SELECT', payload: { value: option.value } });
      setFilteredValue('');
      onChange && onChange(option.value);
    },
    [dispatch, onChange]
  );

  const handleFocus = useCallback(
    (option: SelectableOption) => dispatch({ type: 'FOCUS', payload: { value: option.value } }),
    [dispatch]
  );

  const handleToggle = useCallback(
    () => dispatch({ type: state.mode === Mode.Resting ? 'OPEN' : 'CLOSE' }),
    [Mode, dispatch, state]
  );

  const handleChange = useCallback(
    event => {
      if (state.mode == Mode.Resting) {
        handleToggle();
      }

      setFilteredValue(event.target?.value);
    },
    [Mode.Resting, handleToggle, state.mode]
  );

  const selected = useMemo(
    () => options.find(option => state.value === option.value),
    [options, state.value]
  );

  const filteredOptions = useMemo(() => {
    if (!filteredValue.length) {
      return options;
    }

    return options.filter(
      option =>
        (ignoreCasing
          ? option.label.toLowerCase().includes(filteredValue.toLowerCase())
          : option.label.includes(filteredValue)) && !selectedValues.includes(option.label)
    );
  }, [filteredValue, options, ignoreCasing, selectedValues]);

  return (
    <div
      id={idRef ? `MultiSelect--${idRef}` : undefined}
      className={classNames(
        'MultiSelect',
        { 'MultiSelect--disabled': disabled, 'MultiSelect--error': error },
        className
      )}
      ref={selectRef}
      {...rest}
    >
      <div className='MultiSelect__search'>
        <div className='MultiSelect__selected-items'>
          {(selectedValues || []).map((value, index) => (
            <span className={`MultiSelect__selected-item`} key={index}>
              <span className='MultiSelect__selected-value'>{value}</span>
              <ExitIcon
                style={{ width: '8px', height: '8px', position: 'relative' }}
                className='MultiSelect__exit'
                onClick={() => onRemoveSelectedItem(value)}
              />
            </span>
          ))}
        </div>
        <input
          className='MultiSelect__input'
          value={filteredValue}
          name={name}
          onChange={handleChange}
        />
        <span
          className={classNames('MultiSelect__icon', {
            'MultiSelect__icon--shifted': shiftIconLeftwards
          })}
        >
          {state.mode === Mode.Open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </div>

      {state.mode === Mode.Open && (
        <SelectOptions
          idRef={idRef}
          className={classNames('Select__options', {
            'Select__options--up': dropDirection === 'up',
            'Select__options--down': dropDirection === 'down'
          })}
          options={filteredOptions}
          onSelect={handleSelect}
          onFocus={handleFocus}
          selectedOption={selected}
          autoFocus={false}
        />
      )}
    </div>
  );
};
