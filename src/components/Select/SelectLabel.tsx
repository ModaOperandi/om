import React from 'react';

export type SelectLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  idRef?: string;
  label?: string;
  hasValue: boolean;
};

export const SelectLabel: React.FC<SelectLabelProps> = ({ idRef, label, hasValue }) => {
  if (!label) return null;
  return <label id={`Select__label--${idRef}`}>{`${label}${hasValue ? ': ' : ''}`}</label>;
};
