import React, { useCallback, useMemo } from 'react';
import classNames from 'classnames';
import ChevronDownIcon from '@moda/icons/chevron-down-12';
import ChevronUpIcon from '@moda/icons/chevron-up-12';
import { colors } from '@moda/tokens';
import { Clickable } from '../Clickable';
import { TextColor } from '../Text';
import { SelectOptions } from './SelectOptions';
import { SelectLabel } from './SelectLabel';
import { useSelect } from './useSelect';

import './Select.scss';

export type SelectableOption = { value: string; label: string; disabled?: boolean };

export type SelectProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'defaultValue' | 'value' | 'onChange'
> & {
  allowAutoFill?: boolean;
  autoSelect?: boolean;
  defaultValue?: string | undefined;
  disabled?: boolean;
  dropDirection?: 'down' | 'up';
  error?: boolean | string;
  idRef?: string;
  label?: string;
  name?: string;
  onChange?: (value: string) => void;
  options: SelectableOption[];
  placeholder?: string;
  searchable?: boolean;
  shiftIconLeftwards?: boolean;
  value?: string | undefined;
  dataTestId?: string;
  color?: TextColor;
};

export const Select: React.FC<SelectProps> = ({
  allowAutoFill = false,
  autoSelect = true,
  className,
  defaultValue,
  disabled,
  dropDirection = 'down',
  error,
  idRef,
  label = '',
  name,
  onChange,
  options,
  placeholder,
  searchable,
  shiftIconLeftwards = false,
  value,
  dataTestId,
  color,
  ...rest
}) => {
  const { state, dispatch, Mode, selectRef } = useSelect({ value, defaultValue });

  const handleSelect = useCallback(
    (option: SelectableOption) => {
      dispatch({
        type: 'SELECT',
        payload: { value: autoSelect ? option.value : (value ?? option.value) }
      });
      onChange?.(option.value);
    },
    [autoSelect, value, dispatch, onChange]
  );

  const handleFocus = useCallback(
    (option: SelectableOption) => dispatch({ type: 'FOCUS', payload: { value: option.value } }),
    [dispatch]
  );

  const handleToggle = useCallback(
    () => dispatch({ type: state.mode === Mode.Resting ? 'OPEN' : 'CLOSE' }),
    [Mode, dispatch, state]
  );

  const handleAutofill = useCallback(
    (value: string) => {
      value && dispatch({ type: 'SELECT', payload: { value } });
    },
    [dispatch]
  );

  const selected = useMemo(
    () => options.find(option => state.value === option.value),
    [options, state.value]
  );

  const focused = useMemo(
    () => options.find(option => state.focused === option.value),
    [options, state.focused]
  );

  return (
    <>
      <div
        id={idRef && `Select--${idRef}`}
        className={classNames(
          'Select',
          { 'Select--disabled': disabled, 'Select--error': error },
          className
        )}
        ref={selectRef}
        {...rest}
      >
        {!allowAutoFill && name && (
          <input id={idRef} name={name} type='hidden' value={state.value} />
        )}

        <Clickable
          id={idRef && `Select__value--${idRef}`}
          className='Select__value'
          disabled={disabled}
          onClick={handleToggle}
          data-test-id={dataTestId}
          aria-haspopup='listbox'
          aria-expanded={state.mode === Mode.Open}
          aria-labelledby={`Select__label--${idRef} Select__value--${idRef}`}
          type='button'
          title='Select'
        >
          <SelectLabel
            color={color}
            idRef={idRef}
            label={label || (selected === undefined ? placeholder : undefined)}
            hasValue={focused != null || selected != null}
          />

          <span className='Select__selected-label'>{(focused ?? selected)?.label}</span>

          {color && (
            <div
              className='Select__selected-color'
              style={{ backgroundColor: colors.all[color] }}
            />
          )}

          <span
            className={classNames('Select__icon', { 'Select__icon--shifted': shiftIconLeftwards })}
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
            dataTestId={dataTestId}
            searchable={searchable}
            options={options}
            onSelect={handleSelect}
            onFocus={handleFocus}
            selectedOption={selected}
          />
        )}
      </div>

      {allowAutoFill && (
        <input
          className='Select__hidden-field'
          name={name}
          onChange={({ target }) => handleAutofill(target.value)}
          value={value}
          aria-hidden='true'
          tabIndex={-1}
        />
      )}
    </>
  );
};
