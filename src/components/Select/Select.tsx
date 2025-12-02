import React, { useCallback, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import ChevronDownIcon from '@moda/icons/chevron-down-12';
import ChevronUpIcon from '@moda/icons/chevron-up-12';
import { colors } from '@moda/tokens';
import { Clickable } from '../Clickable';
import { TextColor } from '../Text';
import { useFormControlContext } from '../Field/FormControlContext';
import { SelectOptions } from './SelectOptions';
import { SelectLabel } from './SelectLabel';
import { useSelect } from './useSelect';

import './Select.scss';

export type SelectExtraOption = {
  callback: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  label: string;
  closeOnClick?: boolean;
};

export type SelectableOption = {
  value: string;
  label: string;
  disabled?: boolean;
  colorSwatch?: TextColor;
};

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
  colorSwatch?: TextColor;
  extraOption?: SelectExtraOption;
  paddingRight?: number;
  smallMobileText?: boolean;
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
  colorSwatch,
  extraOption,
  paddingRight,
  smallMobileText = false,
  ...rest
}) => {
  const { displaysError: errorDisplayedByParent } = useFormControlContext();
  const { state, dispatch, Mode, selectRef, buttonRef } = useSelect({
    value,
    defaultValue
  });

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
      if (value) dispatch({ type: 'SELECT', payload: { value } });
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

  useEffect(() => {
    if (disabled && state.mode === Mode.Open) {
      dispatch({ type: 'CLOSE' });
    }
  }, [disabled, state.mode, Mode, dispatch]);

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
          <input id={idRef} name={name} type='hidden' value={state.value || ''} />
        )}

        <Clickable
          ref={buttonRef}
          id={idRef && `Select__value--${idRef}`}
          className={classNames('Select__value', {
            [`Select__value--padding-${paddingRight}`]: paddingRight != null,
            'Select__value--small': smallMobileText
          })}
          disabled={disabled}
          onClick={handleToggle}
          data-test-id={dataTestId}
          aria-haspopup='listbox'
          aria-expanded={state.mode === Mode.Open}
          aria-labelledby={
            label
              ? `Select__label--${idRef}${(focused ?? selected)?.label ? ` Select__valueText--${idRef}` : ''}`
              : undefined
          }
          aria-label={!label ? placeholder || 'Select an option' : undefined}
          aria-invalid={error ? true : undefined}
          aria-controls={state.mode === Mode.Open ? `Select__listbox--${idRef}` : undefined}
          type='button'
        >
          <SelectLabel
            idRef={idRef}
            label={label || (selected === undefined ? placeholder : undefined)}
            hasValue={focused != null || selected != null}
          />

          {colorSwatch && (
            <div
              className='Select__selected-color'
              style={{ backgroundColor: colors.all[colorSwatch] }}
            />
          )}

          <span id={`Select__valueText--${idRef}`}>{(focused ?? selected)?.label}</span>

          <span
            className={classNames('Select__icon', { 'Select__icon--shifted': shiftIconLeftwards })}
          >
            {state.mode === Mode.Open ? (
              <ChevronUpIcon aria-hidden='true' />
            ) : (
              <ChevronDownIcon aria-hidden='true' />
            )}
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
            extraOption={extraOption}
            onCloseDropdown={() => dispatch({ type: 'CLOSE' })}
          />
        )}
      </div>

      {typeof error === 'string' && !errorDisplayedByParent && (
        <div role='status' aria-live='polite' aria-atomic='true' className='Select__live-region'>
          {error}
        </div>
      )}

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
