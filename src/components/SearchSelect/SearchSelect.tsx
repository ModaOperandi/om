import React, { useMemo, useState } from 'react';
import { Input } from '../Field';
import { Select, SelectableOption } from '../Select';
import './SearchSelect.scss';

interface Props {
  options: SelectableOption[];
  onChange: (value: string) => void;
  value: string;
  idRef?: string;
  placeholder?: string;
  label?: string;
  name?: string;
  ignoreCasing?: boolean;
}

export const SearchSelect: React.FC<Props> = ({
  options,
  onChange,
  name,
  label,
  value,
  placeholder,
  idRef,
  ignoreCasing = false
}) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredOptions = useMemo(() => {
    if (!searchValue.length) {
      return options;
    }

    return options.filter(o =>
      ignoreCasing
        ? o.label.toLowerCase().includes(searchValue.toLowerCase())
        : o.label.includes(searchValue)
    );
  }, [options, ignoreCasing, searchValue]);

  return (
    <div className='SearchSelect'>
      <Input
        aria-label='SearchSelect__input'
        name={name}
        placeholder={placeholder}
        value={searchValue}
        onChange={(value: string) => setSearchValue(value)}
      />
      <Select
        idRef={idRef}
        options={filteredOptions}
        onChange={onChange}
        value={value}
        label={label}
      />
    </div>
  );
};
