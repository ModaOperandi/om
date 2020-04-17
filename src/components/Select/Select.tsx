import React, { useCallback, useMemo, useReducer, useEffect, useRef } from 'react';
import classNames from 'classnames';
import ChevronDownIcon from '@moda/icons/chevron-down-12';
import ChevronUpIcon from '@moda/icons/chevron-up-12';
import { Clickable } from '../Clickable';
import { SelectOptions } from './SelectOptions';
import { useClickOutside } from './useClickOutside';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import './Select.scss';

export type SelectableOption = { value: string; label: string; disabled?: boolean };

export type SelectProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'> & {
  idRef?: string;
  label: string;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  options: SelectableOption[];
  onChange?(value: string): void;
};

enum Mode {
  Resting,
  Open,
}

type State = {
  value: string;
  focused: string | null;
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
      return { ...state, value: action.payload.value, focused: null, mode: Mode.Resting };
    case 'FOCUS':
      return { ...state, focused: action.payload.value };
  }
};

export const Select: React.FC<SelectProps> = ({
  idRef = '',
  className,
  defaultValue,
  value,
  options,
  label,
  disabled,
  onChange,
  ...rest
}) => {
  const initialValue =
    defaultValue || value || options.find((option) => !option.disabled)?.value || options[0].value;
  const [state, dispatch] = useReducer(reducer, {
    value: initialValue,
    focused: initialValue,
    mode: Mode.Resting,
  });

  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback(
    (option: SelectableOption) => dispatch({ type: 'SELECT', payload: { value: option.value } }),
    []
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
    onChange && onChange(state.value);
  }, [onChange, state.value]);

  const handleClickOutside = useCallback(() => dispatch({ type: 'CLOSE' }), []);

  useClickOutside(selectRef, handleClickOutside);

  const selected = useMemo(() => options.find((option) => state.value === option.value)!, [
    options,
    state.value,
  ]);

  const focused = useMemo(() => options.find((option) => state.focused === option.value)!, [
    options,
    state.focused,
  ]);

  return (
    <div
      id={idRef ? `Select--${idRef}` : undefined}
      className={classNames('Select', { 'Select--disabled': disabled }, className)}
      ref={selectRef}
      {...rest}
    >
      <input id={idRef} name={idRef} type='hidden' value={state.value} />
      <Clickable
        id={`Select__value--${idRef}`}
        className='Select__value'
        disabled={disabled}
        onClick={handleToggle}
        aria-haspopup='listbox'
        aria-expanded={state.mode === Mode.Open}
        aria-labelledby={`Select__label--${idRef} Select__value--${idRef}`}
        type='button'
      >
        <label id={`Select__label--${idRef}`}>{label}</label> {(focused ?? selected)?.label}
        <span className='Select__icon'>
          {state.mode === Mode.Open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </Clickable>

      {state.mode === Mode.Open && (
        <SelectOptions
          idRef={idRef}
          className='Select__options'
          options={options}
          onSelect={handleSelect}
          onFocus={handleFocus}
          selectedOption={selected}
        />
      )}
    </div>
  );
};
