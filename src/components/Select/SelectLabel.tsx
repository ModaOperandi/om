import React from 'react';

export type SelectLabelProps = React.HTMLAttributes<HTMLSpanElement> & {
  idRef?: string;
  label?: string;
  hasValue: boolean;
};

export const SelectLabel: React.FC<SelectLabelProps> = ({ idRef, label, hasValue }) => {
  if (!label) return null;
  return (
    <span
      id={`Select__label--${idRef}`}
      className='Select__label'
    >{`${label}${hasValue ? ': ' : ''}`}</span>
  );
};
