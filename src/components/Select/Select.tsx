import React, { useCallback, useMemo, useReducer, useEffect, useRef } from 'react';
import classNames from 'classnames';
import ChevronDownIcon from '@moda/icons/chevron-down-12';
import ChevronUpIcon from '@moda/icons/chevron-up-12';
import { Clickable } from '../Clickable';
import { SelectOptions } from './SelectOptions';
import { SelectLabel } from './SelectLabel';
import { useClickOutside } from './useClickOutside';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';

import './Select.scss';

export type SelectableOption = { value: string; label: string; disabled?: boolean };

export type SelectProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'defaultValue' | 'value' | 'onChange'
> & {
  defaultValue?: string | undefined;
  disabled?: boolean;
  idRef?: string;
  label?: string;
  name?: string;
  onChange?: (value: string) => void;
  options: SelectableOption[];
  value?: string | undefined;
  error?: boolean | string;
  allowAutoFill?: boolean;
  shiftIconLeftwards?: boolean;
  optionsOpening?: 'down' | 'up';
};

enum Mode {
  Resting,
  Open
}

type State = {
  value: string | undefined;
  focused: string | undefined;
  mode: Mode;
};

type Action =
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'SELECT'; payload: { value: string } }
  | { type: 'FOCUS'; payload: { value: string } };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'OPEN':
      return { ...state, mode: Mode.Open };
    case 'CLOSE':
      return { ...state, mode: Mode.Resting };
    case 'SELECT':
      return { ...state, value: action.payload.value, focused: undefined, mode: Mode.Resting };
    case 'FOCUS':
      return { ...state, focused: action.payload.value };
  }
};

export const Select: React.FC<SelectProps> = ({
  idRef = '',
  className,
  options,
  label = '',
  name,
  disabled,
  value,
  onChange,
  defaultValue,
  error,
  allowAutoFill = false,
  shiftIconLeftwards = false,
  optionsOpening = 'down',
  ...rest
}) => {
  const initialValue = value ?? defaultValue;

  const [state, dispatch] = useReducer(reducer, {
    value: initialValue,
    focused: initialValue,
    mode: Mode.Resting
  });

  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback(
    (option: SelectableOption) => {
      dispatch({ type: 'SELECT', payload: { value: option.value } });
      onChange && onChange(option.value);
    },
    [onChange]
  );

  const handleFocus = useCallback(
    (option: SelectableOption) => dispatch({ type: 'FOCUS', payload: { value: option.value } }),
    []
  );

  const handleToggle = useCallback(
    () => dispatch({ type: state.mode === Mode.Resting ? 'OPEN' : 'CLOSE' }),
    [state.mode]
  );

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape': {
        event.preventDefault();
        return dispatch({ type: 'CLOSE' });
      }
      default:
        break;
    }
  }, []);

  useEffect(() => {
    const el = selectRef.current;
    if (!el) return;
    el.addEventListener('keydown', handleKeyDown);
    return () => {
      el.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useUpdateEffect(() => {
    value && dispatch({ type: 'SELECT', payload: { value } });
  }, [value]);

  const handleClickOutside = useCallback(() => dispatch({ type: 'CLOSE' }), []);

  const handleAutofill = useCallback(value => {
    value && dispatch({ type: 'SELECT', payload: { value } });
  }, []);

  useClickOutside(selectRef, handleClickOutside);

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
        id={idRef ? `Select--${idRef}` : undefined}
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
          id={`Select__value--${idRef}`}
          className='Select__value'
          disabled={disabled}
          onClick={handleToggle}
          aria-haspopup='listbox'
          aria-expanded={state.mode === Mode.Open}
          aria-labelledby={`Select__label--${idRef} Select__value--${idRef}`}
          type='button'
          title='Select'
        >
          <SelectLabel idRef={idRef} label={label} hasValue={focused != null || selected != null} />

          {(focused ?? selected)?.label}

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
              'Select__options--up': optionsOpening === 'up',
              'Select__options--down': optionsOpening === 'down'
            })}
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
