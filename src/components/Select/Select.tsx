import React, { useCallback, useMemo, useEffect, useRef, useState } from 'react';
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
  name?: string;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  options: SelectableOption[];
  onChange?(value: string): void;
};

enum Mode {
  Resting,
  Open
}

export const Select: React.FC<SelectProps> = ({
  idRef = '',
  className,
  defaultValue,
  value,
  options,
  label,
  name,
  disabled,
  onChange,
  ...rest
}) => {
  const initialValue = value || defaultValue;

  const [selectedValue, setSelectedValue] = useState<string | undefined>(initialValue);
  const [focusedOn, setFocusedOn] = useState<string | undefined>(initialValue);
  const [mode, setMode] = useState(Mode.Resting);

  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = useCallback(
    (option: SelectableOption) => {
      setSelectedValue(option.value);
      setFocusedOn(undefined);
      setMode(Mode.Resting);
      onChange && onChange(option.value);
    },
    [onChange]
  );

  const handleFocus = useCallback((option: SelectableOption) => setFocusedOn(option.value), []);

  const handleToggle = useCallback(() => {
    setMode((currentMode: Mode) => {
      if (currentMode === Mode.Open) {
        return Mode.Resting;
      }
      return Mode.Open;
    });
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape': {
        event.preventDefault();
        return setMode(Mode.Resting);
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

  useUpdateEffect(() => setSelectedValue(value), [value]);

  const handleClickOutside = useCallback(() => setMode(Mode.Resting), []);

  useClickOutside(selectRef, handleClickOutside);

  const selected = useMemo(() => options.find(option => selectedValue === option.value)!, [
    options,
    selectedValue
  ]);

  const focused = useMemo(() => options.find(option => focusedOn === option.value)!, [
    options,
    focusedOn
  ]);

  return (
    <div
      id={idRef ? `Select--${idRef}` : undefined}
      className={classNames('Select', { 'Select--disabled': disabled }, className)}
      ref={selectRef}
      {...rest}
    >
      {name && <input id={idRef} name={name} type='hidden' value={selectedValue} />}
      <Clickable
        id={`Select__value--${idRef}`}
        className='Select__value'
        disabled={disabled}
        onClick={handleToggle}
        aria-haspopup='listbox'
        aria-expanded={mode === Mode.Open}
        aria-labelledby={`Select__label--${idRef} Select__value--${idRef}`}
        type='button'
      >
        <label id={`Select__label--${idRef}`}>{label}</label> {(focused ?? selected)?.label}
        <span className='Select__icon'>
          {mode === Mode.Open ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </Clickable>

      {mode === Mode.Open && (
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
