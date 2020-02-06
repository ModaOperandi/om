import React, { useCallback, useMemo, useReducer, useEffect, useRef } from 'react';
import classNames from 'classnames';
import ChevronDownIcon from '@moda/icons/chevron-down-12';
import ChevronUpIcon from '@moda/icons/chevron-up-12';
import { Clickable } from '../Clickable';
import { SelectOptions } from './SelectOptions';
import { useClickOutside } from './useClickOutside';
import './Select.scss';

export type Option = { value: string; label: string };

export interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'> {
  idRef?: string;
  label: string;
  value?: string;
  options: Option[];
  onChange?(value: string): void;
}

enum Mode {
  Resting,
  Open
}

type State = {
  value: string;
  mode: Mode;
};

type Action = { type: 'OPEN' } | { type: 'CLOSE' } | { type: 'SELECT'; payload: { value: string } };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'OPEN':
      return { ...state, mode: Mode.Open };
    case 'CLOSE':
      return { ...state, mode: Mode.Resting };
    case 'SELECT':
      return { ...state, value: action.payload.value, mode: Mode.Resting };
  }
};

export const Select: React.FC<Props> = ({
  idRef = '',
  className,
  value,
  options,
  label,
  onChange,
  ...rest
}) => {
  const [state, dispatch] = useReducer(reducer, {
    value: value || options[0].value,
    mode: Mode.Resting
  });

  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback((option: Option) => {
    dispatch({ type: 'SELECT', payload: { value: option.value } });
  }, []);

  const handleToggle = useCallback(
    () => dispatch({ type: state.mode === Mode.Resting ? 'OPEN' : 'CLOSE' }),
    [state.mode]
  );

  const selected = useMemo(() => options.find(option => state.value === option.value)!, [
    options,
    state.value
  ]);

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
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => onChange && onChange(state.value), [onChange, state.value]);

  const handleClickOutside = useCallback(() => dispatch({ type: 'CLOSE' }), []);
  useClickOutside(selectRef, handleClickOutside);

  return (
    <div
      id={`Select--${idRef}`}
      className={classNames('Select', className)}
      ref={selectRef}
      {...rest}
    >
      <Clickable
        id={`Select__value--${idRef}`}
        className='Select__value'
        onClick={handleToggle}
        aria-haspopup='listbox'
        aria-expanded={state.mode === Mode.Open}
        aria-labelledby={`Select__label--${idRef} Select__value--${idRef}`}
      >
        <label id={`Select__label--${idRef}`}>{label}</label> {selected.label}
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
          selectedOption={selected}
        />
      )}
    </div>
  );
};
