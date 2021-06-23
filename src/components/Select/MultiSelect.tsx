import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import ChevronDownIcon from '@moda/icons/chevron-down-12';
import ChevronUpIcon from '@moda/icons/chevron-up-12';
import ExitIcon from '@moda/icons/exit-16';
import { SelectableOption } from '.';
import { SelectOptions } from './SelectOptions';
import { useSelect } from './useSelect';
import './MultiSelect.scss';

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'value' | 'onChange'> & {
  defaultValue?: string[] | undefined;
  disabled?: boolean;
  idRef?: string;
  name?: string;
  placeholder?: string;
  onChange?: (value: string[]) => void;
  options: SelectableOption[];
  value?: string[] | undefined;
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
  placeholder,
  onChange,
  defaultValue,
  error,
  shiftIconLeftwards = false,
  ignoreCasing = false,
  dropDirection = 'down',
  ...rest
}) => {
  const { state, dispatch, Mode, selectRef } = useSelect({ value, defaultValue });
  const [searchPhrase, setSearchPhrase] = useState('');

  const stateValueArray = useMemo(
    () => (typeof state.value == 'object' ? state.value : []),
    [state]
  );

  const handleSelect = useCallback(
    (option: SelectableOption) => {
      dispatch({ type: 'SELECT', payload: { value: option.value } });
      setSearchPhrase('');
      onChange && onChange(stateValueArray ? [...stateValueArray, option.value] : [option.value]);
    },
    [dispatch, onChange, stateValueArray]
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

      setSearchPhrase(event.target?.value);
    },
    [Mode.Resting, handleToggle, state.mode]
  );

  const filteredOptions = useMemo(() => {
    if (!searchPhrase.length) {
      return options;
    }

    return options.filter(
      option =>
        (ignoreCasing
          ? option.label.toLowerCase().includes(searchPhrase.toLowerCase())
          : option.label.includes(searchPhrase)) && !state.value?.includes(option.label)
    );
  }, [searchPhrase, options, ignoreCasing, state]);

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
          {stateValueArray.map((currentValue, index) => (
            <span className='MultiSelect__selected-item' key={index}>
              <span className='MultiSelect__selected-value'>{currentValue}</span>
              <ExitIcon
                style={{ width: '8px', height: '8px', position: 'relative' }}
                className='MultiSelect__exit'
                onClick={() =>
                  onChange && onChange((stateValueArray || []).filter(v => currentValue != v))
                }
              />
            </span>
          ))}
        </div>
        <input
          className='MultiSelect__input'
          value={searchPhrase}
          name={name}
          placeholder={placeholder}
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
          autoFocus={false}
        />
      )}
    </div>
  );
};
