import React, { useCallback, useMemo, useEffect } from 'react';
import classNames from 'classnames';
import { uniq } from 'ramda';
import ChevronDownIcon from '@moda/icons/chevron-down-12';
import ChevronUpIcon from '@moda/icons/chevron-up-12';
import ExitIcon from '@moda/icons/exit-16';
import { Clickable } from '../Clickable';
import { SelectOptions } from './SelectOptions';
import { useSelect } from './useSelect';
import { SelectableOption } from '.';
import './MultiSelect.scss';

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'value' | 'onChange'> & {
  defaultValue?: string[] | undefined;
  disabled?: boolean;
  dropDirection?: 'down' | 'up';
  error?: boolean | string;
  idRef?: string;
  name?: string;
  onChange?: (value: string[]) => void;
  options: SelectableOption[];
  placeholder?: string;
  searchable?: boolean;
  shiftIconLeftwards?: boolean;
  value?: string[] | undefined;
};

export const MultiSelect: React.FC<Props> = ({
  className,
  defaultValue,
  disabled,
  dropDirection = 'down',
  error,
  idRef = '',
  onChange,
  options,
  searchable,
  shiftIconLeftwards,
  value,
  ...rest
}) => {
  const { state, dispatch, Mode, selectRef } = useSelect({ value, defaultValue });

  const values = useMemo(() => (Array.isArray(state.value) ? state.value : []), [state.value]);

  const selectedLabels = useMemo(
    () => values.map(value => options.find(option => option.value === value)?.label || value),
    [values, options]
  );

  const accessibleLabel = useMemo(() => {
    if (selectedLabels.length === 0) return 'Select options';
    return `Select options, ${selectedLabels.length} selected: ${selectedLabels.join(', ')}`;
  }, [selectedLabels]);

  const handleSelect = useCallback(
    (option: SelectableOption) => {
      dispatch({ type: 'SELECT', payload: { value: uniq([...values, option.value]) } });
    },
    [dispatch, values]
  );

  const handleRemove = useCallback(
    (item: string) => {
      dispatch({
        type: 'SELECT',
        payload: { value: values.filter(currItem => currItem != item) }
      });
    },
    [dispatch, values]
  );

  const handleFocus = useCallback(
    (option: SelectableOption) => dispatch({ type: 'FOCUS', payload: { value: option.value } }),
    [dispatch]
  );

  const handleToggle = useCallback(
    () => dispatch({ type: state.mode === Mode.Resting ? 'OPEN' : 'CLOSE' }),
    [Mode, dispatch, state]
  );

  useEffect(() => {
    onChange?.(values);
  }, [onChange, values]);

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
      <Clickable
        className='MultiSelect__search'
        disabled={disabled}
        onClick={handleToggle}
        aria-haspopup='listbox'
        aria-expanded={state.mode === Mode.Open}
        aria-controls={state.mode === Mode.Open ? `Select__listbox--${idRef}` : undefined}
        aria-label={accessibleLabel}
        type='button'
      >
        <div className='MultiSelect__selected-items'>
          {values.map((value, index) => (
            <span className='MultiSelect__selected-item' key={index}>
              <span className='MultiSelect__selected-value'>
                {options.find(option => option.value === value)?.label || value}
              </span>
              <ExitIcon
                style={{ width: '8px', height: '8px', position: 'relative' }}
                className='MultiSelect__exit'
                onClick={() => handleRemove(value)}
              />
            </span>
          ))}
        </div>
        <span
          className={classNames('MultiSelect__icon', {
            'MultiSelect__icon--shifted': shiftIconLeftwards
          })}
        >
          {state.mode === Mode.Open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </Clickable>

      {state.mode === Mode.Open && (
        <SelectOptions
          idRef={idRef}
          className={classNames('Select__options', {
            'Select__options--up': dropDirection === 'up',
            'Select__options--down': dropDirection === 'down'
          })}
          searchable={searchable}
          options={options}
          onSelect={handleSelect}
          onFocus={handleFocus}
        />
      )}
    </div>
  );
};
